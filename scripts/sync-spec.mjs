import { copyFile, mkdir, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, '..', 'whatsaf', 'apps', 'api', 'dist', 'openapi', 'sdk-openapi.json');
const destination = resolve(root, 'openapi', 'sdk-openapi.json');

await stat(source).catch(() => {
  throw new Error(`Backend SDK contract not found at ${source}. Run npm run openapi:export in ../whatsaf first.`);
});
await mkdir(dirname(destination), { recursive: true });
await copyFile(source, destination);
console.log(`Synchronized ${destination}`);
