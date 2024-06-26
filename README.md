# SHUFFLE

> A project management kanban dashboard with bun, vite & react.

![banner](./public/shuffle.png)

## Available Scripts

```bash
bun create vite <app_name>
# and
bun run dev
```

Open [localhost:3000](http://localhost:3000) to view the application on a local machine.

Add tailwindcss to the build with the following commands

```bash
bun add -d tailwindcss autoprefixer postcss
# and
bun run tailwindcss init
```

## Build

Scaffold a starter template with the given scripts.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-  [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-  Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-  Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-  Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-  Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
