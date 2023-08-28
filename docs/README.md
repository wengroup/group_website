# Build and publish the website

Usage scenario:

- host the source code in `group_website`
- deploy the built site to `wengroup.github.io`

We can either do it manually or use GitHub actions to automate it. See below.

## Manually

### Build and publish

```
npm ci
npm run deploy
```

### Local check

Before publishing, it might be useful to check it locally, this can be done by

```
npm ci
npm run build
npm run serve
```

The you can see the build website at `localhost:9000`.

### Development

In development, it becomes useful to start a development server that allows you to make changes to the code, content, or configuration files and immediately see the updates reflected in the live preview.

```
npm run start
```

The development server will be at `localhost:8000`.

## Via Github actions

- Use the `peaceiris/actions-gh-pages` actions
- Follow the [Deploy to external repository external_repository](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-deploy-to-external-repository-external_repository) approach
  - This needs the use of `deploy_key`, see [Set SSH Private Key deploy_key](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-set-ssh-private-key-deploy_key)
  - Note, the private key you generated should be added to the `group_website` repo, under `Secrets` with the name `ACTIONS_DEPLOY_KEY` (the name is consistent with the `secretes.ACTIONS_DEPLOY_KEY` field in the .yml file)
  - Note, the publish key you generated should be added to the `wengroup.github.io` repo, under `Deploy Keys` with the name `Public key of ACTIONS_DEPLOY_KEY` (this name does not matter, but good to use this). Also, select `Allow write access` when adding the public key.

The action basically runs

```
npm ci
npm run build
```

and then copy the files to the target repo.
