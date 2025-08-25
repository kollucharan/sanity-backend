import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '0fl11mre',
    dataset: 'production'
  },
   studioHost: 'talview',
  autoUpdates: true,
})
