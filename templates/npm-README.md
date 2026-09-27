# @paygham/sdk

Official TypeScript and JavaScript client for the Paygham Messaging API.

- [Source repository](https://github.com/SamimSafi/payghamSdks)
- [Issues and support](https://github.com/SamimSafi/payghamSdks/issues)
- [Detailed API reference](docs/MessagingApi.md)
- [Errors and retry guidance](ERRORS.md)

## Installation

```sh
npm install @paygham/sdk
```

The SDK uses the Fetch API and supports Node.js 18 or newer. Keep Paygham API keys on a trusted server. Do not expose them in browser JavaScript, mobile applications, public repositories, logs, or error reports.

## Configuration

```ts
import { Configuration, MessagingApi } from '@paygham/sdk';

const basePath = process.env.PAYGHAM_BASE_URL;
const apiKey = process.env.PAYGHAM_API_KEY;

if (!basePath || !apiKey) {
  throw new Error('PAYGHAM_BASE_URL and PAYGHAM_API_KEY are required');
}

export const paygham = new MessagingApi(new Configuration({
  basePath,
  apiKey,
}));
```

`basePath` must be the HTTPS origin of your Paygham API deployment, without a trailing slash.

## Send A Message

```ts
import { randomUUID } from 'node:crypto';
import { paygham } from './paygham.js';

const result = await paygham.sendMessage({
  idempotencyKey: randomUUID(),
  sendMessageRequest: {
    whatsappAccountId: 'YOUR_WHATSAPP_ACCOUNT_ID',
    to: '+93700123456',
    message: 'Your order is ready.',
  },
});

console.log(result.status, result.messageId);
```

For a local phone number, include its two-letter country code:

```ts
sendMessageRequest: {
  whatsappAccountId: 'YOUR_WHATSAPP_ACCOUNT_ID',
  countryCode: 'AF',
  to: '0700123456',
  message: 'Your appointment is confirmed.',
}
```

## Send Media

Use either `mediaUrl` or `mediaBase64`, never both. Supported MIME types are `image/jpeg`, `image/png`, and `application/pdf`.

```ts
await paygham.sendMessage({
  idempotencyKey: 'invoice-1001',
  sendMessageRequest: {
    whatsappAccountId: 'YOUR_WHATSAPP_ACCOUNT_ID',
    to: '+93700123456',
    message: 'Invoice 1001',
    mediaUrl: 'https://cdn.example.com/invoices/1001.pdf',
    mediaMimeType: 'application/pdf',
    mediaFilename: 'invoice-1001.pdf',
  },
});
```

## Send A Bulk Message

```ts
const batch = await paygham.sendBulkMessages({
  idempotencyKey: 'campaign-2026-09-27',
  bulkMessageRequest: {
    whatsappAccountId: 'YOUR_WHATSAPP_ACCOUNT_ID',
    recipients: ['+93700123456', '+93700987654'],
    message: 'Service maintenance starts at 22:00.',
  },
});

for (const item of batch.results) {
  console.log(item.recipient, item.status, item.error);
}
```

Bulk acceptance does not mean every recipient was queued. Inspect every item in `results`.

## Delivery And Connection Status

```ts
const connection = await paygham.getConnectionStatus({
  whatsappAccountId: 'YOUR_WHATSAPP_ACCOUNT_ID',
});

if (connection.data.stable) {
  const delivery = await paygham.getDeliveryStatus({
    whatsappAccountId: connection.data.accountId,
  });
  console.log(delivery.data);
}
```

Prefer Paygham webhooks for ongoing delivery updates. Use status endpoints for reconciliation and recovery, not aggressive polling.

## Error Handling

```ts
import { ResponseError } from '@paygham/sdk';
import type { ApiError } from '@paygham/sdk';

try {
  await paygham.sendMessage({
    idempotencyKey: 'order-1001-ready',
    sendMessageRequest: {
      whatsappAccountId: 'YOUR_WHATSAPP_ACCOUNT_ID',
      to: '+93700123456',
      message: 'Your order is ready.',
    },
  });
} catch (error) {
  if (error instanceof ResponseError) {
    const body = await error.response.clone().json().catch(() => undefined) as ApiError | undefined;
    console.error({
      status: error.response.status,
      code: body?.error.code,
      message: body?.error.message,
      retryAfter: error.response.headers.get('retry-after'),
    });
  } else {
    console.error('Network or client error', error);
  }
}
```

See [Errors And Retries](https://github.com/SamimSafi/payghamSdks/blob/main/sdks/npm/ERRORS.md) for the status-code table and retry policy.

## Idempotency

`sendMessage` and `sendBulkMessages` require an idempotency key. Use one stable key for one business action and reuse it when retrying after a timeout, `429`, `502`, or temporary `5xx` response. A new key means a new message or batch.

## Available Operations

| Method | Purpose |
| --- | --- |
| `sendMessage` | Queue one text or media message. |
| `sendBulkMessages` | Queue one message for multiple recipients. |
| `getConnectionStatus` | Read live WhatsApp account readiness. |
| `getDeliveryStatus` | Read pending, sent, and failed totals. |
| `resumeDelivery` | Requeue pending messages after reconnect. |

## Development

This package is generated from `openapi/sdk-openapi.json`. Changes to generated source should be made in the backend contract, generator configuration, templates, or post-processing scripts.

```sh
npm run generate:npm
cd sdks/npm
npm install
npm run build
npm pack --dry-run
```

The repository currently marks generated packages as unlicensed/proprietary until the project owner selects and adds a public license.
