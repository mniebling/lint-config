# @mniebling/lint-config

[![npm](https://img.shields.io/npm/v/@mniebling/lint-config)](https://www.npmjs.com/package/@mniebling/lint-config)

Autoformat on save is a useful time saver and integrating a formatter with AI tooling is very effective to get output code looking correct.
However, Prettier is too opinionated; it wraps lines in weird ways and enforces some suboptimal patterns.
This tradeoff is tolerable for writing code on a large team, but not for working on my personal projects.

See: https://antfu.me/posts/why-not-prettier


## Installation

```sh
npm install --save-dev \
  @mniebling/lint-config \
  oxlint \
  oxlint-tsgolint \
  @stylistic/eslint-plugin
```


## Usage

Create an `oxlint.config.ts` in the project root:

```ts
import myConfig from '@mniebling/lint-config'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [myConfig],
})
```

Project-specific rules can be added alongside `extends` and will override the shared config:

```ts
import myConfig from '@mniebling/lint-config'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [myConfig],
  rules: {
    'no-console': 'warn',
  },
})
```

## Type-aware linting

Type-aware linting is enabled via `options.typeAware: true`.
This requires `oxlint-tsgolint` to be installed and running alongside oxlint.
See the [Oxlint type-aware linting docs](https://oxc.rs/docs/guide/usage/linter/type-aware.html) for more info.
