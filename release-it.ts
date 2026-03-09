import type { Config } from 'release-it'

export default {
	git: {
		requireCleanWorkingDir: false,
	},
	github: {
		release: true,
		web: true, // Open a browser to edit the GitHub release (and clean up the changelog!)
	},
	npm: {
		publish: true,
	},
} satisfies Config
