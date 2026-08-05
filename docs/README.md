# Build and publish the website

The source code is hosted in `wengroup/group_website`, and the built website is
published to `wengroup/wengroup.github.io`.

Use Node.js 22 to match the environment used by GitHub Actions.

## Local development

Install the dependencies from `package-lock.json`:

```shell
npm ci
```

Start the Gatsby development server:

```shell
npm run start
```

The development website is available at <http://localhost:8000>.

## Check the production build locally

Build the website and serve the generated files:

```shell
npm run build
npm run serve
```

The built website is available at <http://localhost:9000>.

## Publish manually

The `deploy` script builds the website and pushes the contents of `public/` to
the `main` branch of `wengroup/wengroup.github.io`:

```shell
npm run deploy
```

This command uses the SSH URL configured in `package.json`. Your local SSH key
must therefore have write access to `wengroup/wengroup.github.io`.

## Publish with GitHub Actions

The workflow in `.github/workflows/deploy.yml` runs for pushes to `main` and for
pull requests. It currently:

1. Checks out the source repository.
2. Installs Node.js 22 and enables the npm cache.
3. Runs `npm ci`.
4. Runs `npm run build`.
5. Publishes `public/` to the `main` branch of
   `wengroup/wengroup.github.io` when the source branch is `main`.

Deployment uses
[`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages)
with its
[`external_repository`](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-deploy-to-external-repository-external_repository)
option.

### Configure the deployment key

1. Generate an SSH key pair for deployment.
2. Add the private key to the `wengroup/group_website` repository under
   **Settings > Secrets and variables > Actions**. Name the secret
   `ACTIONS_DEPLOY_KEY` to match
   `secrets.ACTIONS_DEPLOY_KEY` in the workflow.
3. Add the public key to the `wengroup/wengroup.github.io` repository under
   **Settings > Deploy keys**, and enable **Allow write access**.

See the action's
[`deploy_key` instructions](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-set-ssh-private-key-deploy_key)
for additional details.

## Known build noise

A clean build (one where `.cache/` was removed) prints a bare `ERROR UNKNOWN`
just before "Building static HTML for pages", then finishes successfully. It is
not a build failure. Gatsby's default logger renders any stray worker stderr as
an error, and what it is picking up is Node's `DEP0040` deprecation warning for
the built-in `punycode` module, reached through
`gatsby > node-fetch@2 > whatwg-url@5`. Nothing in this repository imports it,
so it can only be resolved upstream. To see the underlying message, run:

```shell
GATSBY_LOGGER=yurnalist npm run build
```
