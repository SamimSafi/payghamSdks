# Errors And Retries

Paygham returns errors as JSON:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "details": {}
  }
}
```

`details` is optional. SDK users should use the HTTP status and `error.code` for decisions, and display or log `error.message` for diagnosis.

| Status | Meaning | Retry guidance |
| --- | --- | --- |
| `400` | Invalid request or missing `Idempotency-Key` | Correct the request; do not retry unchanged. |
| `401` | Missing, invalid, expired, or revoked API key | Replace the API key; do not loop retries. |
| `403` | The plan or account cannot use the requested feature | Change the plan, engine, or attachment usage. |
| `404` | WhatsApp account not found or not owned by the API-key user | Verify the account ID and API key. |
| `409` | Account state or idempotency conflict | Inspect the message and account state before retrying. |
| `413` | Payload or bulk recipient list is too large | Reduce the payload or split the batch. |
| `429` | Rate, quota, daily, or recipient-cooldown limit | Wait for `Retry-After` when present, then retry with the same idempotency key. |
| `502` | Upstream WhatsApp delivery service failed | Retry with backoff and the same idempotency key. |
| `5xx` | Temporary Paygham service failure | Retry with exponential backoff and the same idempotency key. |

For connection failures and timeouts, retry only when the original result is unknown. Reusing the same `Idempotency-Key` prevents creation of a second business message.

Never retry `sendMessage` or `sendBulkMessages` with a new idempotency key unless you intend to create a new message or batch.

Report reproducible SDK problems at [GitHub Issues](https://github.com/SamimSafi/payghamSdks/issues). Do not include API keys, phone numbers, message bodies, or other private customer data in an issue.
