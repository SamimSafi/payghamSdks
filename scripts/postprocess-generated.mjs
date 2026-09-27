import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const name = process.argv[2];
const supported = new Set(['npm', 'python', 'ruby', 'php', 'nuget', 'go']);
if (!supported.has(name)) throw new Error(`Unsupported SDK '${name}'`);

const sdkRoot = resolve(root, 'sdks', name);
const repository = 'https://github.com/SamimSafi/payghamSdks';
const issues = `${repository}/issues`;
const errorGuide = `${repository}/blob/main/sdks/${name}/ERRORS.md`;

const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));
const writeJson = async (path, value) => writeFile(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
const replaceRequired = (text, search, replacement, label) => {
  if (!text.includes(search)) throw new Error(`Could not update ${label}: expected generated text was not found`);
  return text.replace(search, replacement);
};

await copyFile(resolve(root, 'docs', 'errors.md'), resolve(sdkRoot, 'ERRORS.md'));

if (name === 'npm') {
  await copyFile(resolve(root, 'templates', 'npm-README.md'), resolve(sdkRoot, 'README.md'));
  const packagePath = resolve(sdkRoot, 'package.json');
  const packageJson = await readJson(packagePath);
  Object.assign(packageJson, {
    description: 'Official TypeScript and JavaScript SDK for the Paygham Messaging API.',
    author: 'Paygham',
    license: 'UNLICENSED',
    repository: { type: 'git', url: `${repository}.git`, directory: 'sdks/npm' },
    homepage: `${repository}#readme`,
    bugs: { url: issues },
    keywords: ['paygham', 'whatsapp', 'messaging', 'api', 'sdk', 'typescript'],
    files: ['dist', 'docs', 'README.md', 'ERRORS.md'],
    engines: { node: '>=18' },
    publishConfig: { access: 'public' },
  });
  await writeJson(packagePath, packageJson);
}

if (name === 'python') {
  const pyprojectPath = resolve(sdkRoot, 'pyproject.toml');
  let pyproject = await readFile(pyprojectPath, 'utf8');
  pyproject = replaceRequired(pyproject, 'name = "paygham"', 'name = "paygham-sdk"', 'Python project name');
  pyproject = replaceRequired(
    pyproject,
    '{name = "Paygham SDK Support",email = "team@openapitools.org"}',
    '{name = "Paygham"}',
    'Python author',
  );
  if (!pyproject.includes(`Issues = "${issues}"`)) {
    pyproject = pyproject.replace('[project.urls]\n', `[project.urls]\nIssues = "${issues}"\n`);
  }
  if (!pyproject.includes(`Documentation = "${repository}/tree/main/sdks/python"`)) {
    pyproject = pyproject.replace(
      '[project.urls]\n',
      `[project.urls]\nDocumentation = "${repository}/tree/main/sdks/python"\n`,
    );
  }
  await writeFile(pyprojectPath, pyproject, 'utf8');

  const setupPath = resolve(sdkRoot, 'setup.py');
  let setup = await readFile(setupPath, 'utf8');
  setup = replaceRequired(setup, 'author="Paygham SDK Support"', 'author="Paygham"', 'Python setup author');
  setup = setup.replace('author_email="team@openapitools.org"', 'author_email=""');
  setup = setup.replace('url=""', `url="${repository}"`);
  await writeFile(setupPath, setup, 'utf8');
}

if (name === 'php') {
  const composerPath = resolve(sdkRoot, 'composer.json');
  const composer = await readJson(composerPath);
  Object.assign(composer, {
    name: 'paygham/sdk',
    description: 'Official PHP SDK for the Paygham Messaging API.',
    homepage: repository,
    license: 'proprietary',
    authors: [{ name: 'Paygham', homepage: repository }],
    support: { issues, source: repository },
  });
  await writeJson(composerPath, composer);
}

if (name === 'ruby') {
  const gemspecPath = resolve(sdkRoot, 'paygham.gemspec');
  let gemspec = await readFile(gemspecPath, 'utf8');
  gemspec = replaceRequired(
    gemspec,
    's.metadata    = {}',
    `s.metadata    = {\n    "source_code_uri" => "${repository}",\n    "bug_tracker_uri" => "${issues}",\n    "documentation_uri" => "${repository}/tree/main/sdks/ruby"\n  }`,
    'Ruby package links',
  );
  await writeFile(gemspecPath, gemspec, 'utf8');
}

if (name === 'nuget') {
  const projectPath = resolve(sdkRoot, 'src', 'Paygham', 'Paygham.csproj');
  let project = await readFile(projectPath, 'utf8');
  project = project
    .replace('<Authors>OpenAPI</Authors>', '<Authors>Paygham</Authors>')
    .replace('<Company>OpenAPI</Company>', '<Company>Paygham</Company>')
    .replace('<AssemblyTitle>OpenAPI Library</AssemblyTitle>', '<AssemblyTitle>Paygham Messaging SDK</AssemblyTitle>')
    .replace('<Description>A library generated from a OpenAPI doc</Description>', '<Description>Official .NET SDK for the Paygham Messaging API.</Description>')
    .replace('<Copyright>No Copyright</Copyright>', '<Copyright>Copyright Paygham</Copyright>')
    .replace('</RepositoryType>', `</RepositoryType>\n    <PackageProjectUrl>${repository}</PackageProjectUrl>\n    <PackageReadmeFile>README.md</PackageReadmeFile>\n    <PackageTags>paygham;whatsapp;messaging;api;sdk</PackageTags>`)
    .replace(
      '  </ItemGroup>\n\n</Project>',
      `  </ItemGroup>\n\n  <ItemGroup>\n    <None Include="../../README.md" Pack="true" PackagePath="README.md" />\n    <None Include="../../ERRORS.md" Pack="true" PackagePath="ERRORS.md" />\n  </ItemGroup>\n\n</Project>`,
    );
  await writeFile(projectPath, project, 'utf8');
}

if (name === 'go') {
  const goModPath = resolve(sdkRoot, 'go.mod');
  let goMod = await readFile(goModPath, 'utf8');
  goMod = goMod.replace(/^module .+$/m, 'module github.com/SamimSafi/payghamSdks/sdks/go');
  await writeFile(goModPath, goMod, 'utf8');
}

if (name !== 'npm') {
  const readmePath = resolve(sdkRoot, 'README.md');
  const readme = await readFile(readmePath, 'utf8');
  const support = [
    '',
    '## Paygham Documentation And Support',
    '',
    `- [Source repository](${repository})`,
    `- [Issues and support](${issues})`,
    `- [Errors and retry guidance](${errorGuide})`,
    '',
    'Keep API keys on trusted servers and reuse the same idempotency key when retrying a message request.',
    '',
  ].join('\n');
  await writeFile(readmePath, `${readme.trimEnd()}\n${support}`, 'utf8');
}

console.log(`Post-processed ${name} SDK metadata and documentation`);
