Note: we can try run dev server\
*pre-req: we are running node v20.14.0(version handled via nvm 1.1.12) + bun 1.1.12 as pkg mgr, might need to install these dependencies if required

Bun: [Installation | Bun Docs](https://bun.sh/docs/installation)
NVM for Windows: [coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go. (github.com)](https://github.com/coreybutler/nvm-windows)
NVM: https://github.com/creationix/nvm

if you have nvm installed, run this to get lts version of node
```
 nvm install lts
```
install node modules
```
bun i
```
run dev server
```
bun run dev
```
#


# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
