// Lint the package itself with its own config.
// Useful for config files like this one and release-it.ts.

import myConfig from './index.ts'
import { defineConfig } from 'oxlint'

export default defineConfig({
	extends: [myConfig],
})
