# ext-ts

`ext-ts` is a modern TypeScript reimplementation of the Sencha ExtJS ecosystem, designed as a pnpm workspace monorepo with native ESM packages.

## Packages

- `@ext-ts/core` — class system, events, utilities
- `@ext-ts/data` — models, stores, proxies
- `@ext-ts/component` — component model, lifecycle, rendering
- `@ext-ts/layout` — layout managers
- `@ext-ts/ui` — UI widgets
- `@ext-ts/form` — form fields and validation
- `@ext-ts/grid` — grid/table components
- `@ext-ts/dd` — drag and drop
- `@ext-ts/app` — application architecture (MVC/MVVM)
- `@ext-ts/fx` — animations and effects
- `@ext-ts/theme` — theming and token system

## Getting started

```bash
pnpm install
pnpm test
pnpm build
```

The workspace uses TypeScript project references, Vitest, ESLint flat config, Prettier, Husky, lint-staged, and tsup (ESM output only).
