import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '0fl11mre',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * test
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
   studioHost: 'talview',
  autoUpdates: true,
})
