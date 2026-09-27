import { access, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const repository = 'https://github.com/SamimSafi/payghamSdks';
const sdkNames = ['npm', 'python', 'ruby', 'php', 'nuget', 'go'];
const errors = [];

const expectFile = async (path) => {
  try {
    await access(resolve(root, path));
  } catch {
    errors.push(`${path}: file is missing`);
  }
};

const expectText = async (path, expected) => {
  const text = await readFile(resolve(root, path), 'utf8');
  for (const value of expected) {
    if (!text.includes(value)) errors.push(`${path}: missing ${JSON.stringify(value)}`);
  }
};

for (const name of sdkNames) {
  await expectFile(`sdks/${name}/ERRORS.md`);
  await expectText(`sdks/${name}/README.md`, [repository, `${repository}/issues`]);
}

const npmPackage = JSON.parse(await readFile(resolve(root, 'sdks/npm/package.json'), 'utf8'));
if (npmPackage.repository?.url !== `${repository}.git`) errors.push('npm: incorrect repository URL');
if (npmPackage.bugs?.url !== `${repository}/issues`) errors.push('npm: incorrect issues URL');
for (const file of ['dist', 'docs', 'README.md', 'ERRORS.md']) {
  if (!npmPackage.files?.includes(file)) errors.push(`npm: package files do not include ${file}`);
}

await expectText('sdks/python/pyproject.toml', [`Repository = "${repository}"`, `Issues = "${repository}/issues"`]);
await expectText('sdks/ruby/paygham.gemspec', [`"source_code_uri" => "${repository}"`, `"bug_tracker_uri" => "${repository}/issues"`]);
await expectText('sdks/php/composer.json', [`"issues": "${repository}/issues"`, `"source": "${repository}"`]);
await expectText('sdks/nuget/src/Paygham/Paygham.csproj', [`<RepositoryUrl>${repository}.git</RepositoryUrl>`, '<PackageReadmeFile>README.md</PackageReadmeFile>']);
await expectText('sdks/go/go.mod', ['module github.com/SamimSafi/payghamSdks/sdks/go']);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Generated SDK documentation and package metadata are valid.');
}
