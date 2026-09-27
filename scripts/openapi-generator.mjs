import { createWriteStream } from 'node:fs';
import { access, mkdir, rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const GENERATOR_VERSION = '7.25.0';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const spec = resolve(root, 'openapi', 'sdk-openapi.json');
const jar = resolve(root, '.tools', `openapi-generator-cli-${GENERATOR_VERSION}.jar`);

const sdks = {
  npm: { generator: 'typescript-fetch', output: 'npm', config: 'npm.json' },
  python: { generator: 'python', output: 'python', config: 'python.json' },
  ruby: { generator: 'ruby', output: 'ruby', config: 'ruby.json' },
  php: { generator: 'php', output: 'php', config: 'php.json' },
  nuget: { generator: 'csharp', output: 'nuget', config: 'nuget.json' },
  go: { generator: 'go', output: 'go', config: 'go.json' }
};

const exists = async (path) => access(path).then(() => true, () => false);

const ensureJar = async () => {
  if (await exists(jar)) return;
  await mkdir(dirname(jar), { recursive: true });
  const url = `https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/${GENERATOR_VERSION}/openapi-generator-cli-${GENERATOR_VERSION}.jar`;
  console.log(`Downloading OpenAPI Generator ${GENERATOR_VERSION}...`);
  const response = await fetch(url);
  if (!response.ok || !response.body) throw new Error(`Generator download failed: HTTP ${response.status}`);
  await pipeline(Readable.fromWeb(response.body), createWriteStream(jar));
};

const runJava = (args) => new Promise((resolvePromise, reject) => {
  const child = spawn('java', ['-jar', jar, ...args], { cwd: root, stdio: 'inherit' });
  child.once('error', reject);
  child.once('exit', (code, signal) => {
    if (signal) reject(new Error(`OpenAPI Generator stopped by ${signal}`));
    else if (code === 0) resolvePromise();
    else reject(new Error(`OpenAPI Generator exited with code ${code}`));
  });
});

const validate = async () => {
  await runJava(['validate', '-i', spec]);
};

const generateSdk = async (name) => {
  const sdk = sdks[name];
  if (!sdk) throw new Error(`Unknown SDK '${name}'. Choose: ${Object.keys(sdks).join(', ')}`);
  const output = resolve(root, 'sdks', sdk.output);
  const sdkRoot = resolve(root, 'sdks') + sep;
  if (!output.startsWith(sdkRoot)) throw new Error(`Refusing to replace output outside ${sdkRoot}`);
  await rm(output, { recursive: true, force: true });
  await runJava([
    'generate',
    '-i', spec,
    '-g', sdk.generator,
    '-o', output,
    '-c', resolve(root, 'config', sdk.config),
    '--git-user-id', 'SamimSafi',
    '--git-repo-id', 'payghamSdks',
    '--global-property', 'apiTests=false,modelTests=false'
  ]);
  await runPostprocess(name);
};

const runPostprocess = (name) => new Promise((resolvePromise, reject) => {
  const child = spawn(process.execPath, [resolve(root, 'scripts', 'postprocess-generated.mjs'), name], {
    cwd: root,
    stdio: 'inherit',
  });
  child.once('error', reject);
  child.once('exit', (code, signal) => {
    if (signal) reject(new Error(`Post-processing stopped by ${signal}`));
    else if (code === 0) resolvePromise();
    else reject(new Error(`Post-processing exited with code ${code}`));
  });
});

const command = process.argv[2];
const requested = process.argv[3];
await ensureJar();

if (command === 'validate') {
  await validate();
} else if (command === 'generate') {
  await validate();
  for (const name of requested ? [requested] : Object.keys(sdks)) await generateSdk(name);
} else {
  throw new Error('Usage: node scripts/openapi-generator.mjs <validate|generate> [sdk]');
}
