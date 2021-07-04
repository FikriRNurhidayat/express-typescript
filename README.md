# Express Typescript with Jest Template

This repository is just a basic Express Typescript setup with Jest as Testing Framework.
The design pattern being used is `Service Repository Pattern`.
## How to Run

Install it!

```bash
yarn
```

Then if you want to run a development server use:

```bash
yarn serve
```

And if you want to use it on the production server just use:

```bash
yarn build && yarn start
```

## Serving Response

This repository is very opinitated, it uses the JSend specification on serving JSON response.
Use this following method to serve the response, from the `Response` object:

```typescript
res.ok(200, {});
res.fail(404, {});
res.error(500, err);
```

TODO: Write proper documentation.
