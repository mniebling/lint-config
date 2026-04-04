import type { Config } from 'release-it'

export default {
	git: {
		requireCleanWorkingDir: false,
		tagName: 'v${version}',
	},
	github: {
		release: true,
		releaseName: '${version}',
		web: true, // Open a browser to edit the GitHub release (and clean up the changelog!)
	},
	npm: {
		publish: true,
	},
} satisfies Config
