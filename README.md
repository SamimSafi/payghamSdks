# Paygham SDKs

Official client libraries generated from the Paygham Messaging OpenAPI contract.

## SDKs

| Ecosystem | Output | Tentative package name |
| --- | --- | --- |
| npm | `sdks/npm` | `@paygham/sdk` |
| Python | `sdks/python` | `paygham-sdk` |
| RubyGems | `sdks/ruby` | `paygham` |
| Composer / PHP | `sdks/php` | `paygham/sdk` |
| NuGet | `sdks/nuget` | `Paygham` |
| Go modules | `sdks/go` | `github.com/paygham/paygham-go` |

Package names are intentionally easy to change in `config/*.json`. Confirm registry ownership and choose a license before the first public release.

## Generate

Java 11 or newer and Node.js 20 or newer are required. The generation script downloads the pinned OpenAPI Generator JAR into the ignored `.tools` directory.

```sh
npm run sync-spec
npm run validate
npm run generate
```

Generate one SDK with `npm run generate:npm`, `generate:python`, `generate:ruby`, `generate:php`, `generate:nuget`, or `generate:go`.

Generated folders are disposable. Put shared generation behavior in the OpenAPI contract, `config/`, or `scripts/`, then regenerate.

## Source contract

`openapi/sdk-openapi.json` is synchronized from:

```text
../whatsaf/apps/api/dist/openapi/sdk-openapi.json
```

When the backend contract changes, export it in the backend first:

```sh
cd ../whatsaf
npm run openapi:export
cd ../payghamSdks
npm run sync-spec
npm run validate
npm run generate
```
