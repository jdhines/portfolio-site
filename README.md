# fresh project

This site uses Fresh (https://fresh.deno.dev/), which includes Preact for server-side rendering while also providing interactivity through the concept of "islands" where rendering takes place on the client as well.

Styling is handled with [Fresh](https://usefresh.org/) which includes Tailwind.

## Usage

To start up a local hot-reloading dev server:

```
deno task start
```

This will watch the project directory and restart as necessary.

## Deployment

See the instructions at [fresh.deno.dev](https://fresh.deno.dev/docs/getting-started/deploy-to-production).

A push to any branch will trigger a build. Changes on `main` will get deployed as production, and any other branch change will be able to be seen via a preview URL, which will be shown on the Deployments tab of the [Deno Dashboard](https://dash.deno.com/projects/jess-hines/deployments).
