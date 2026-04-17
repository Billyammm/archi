import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vel2g5w8',
    dataset: 'production'
  },
  // Add this part here:
  deployment: {
    appId: 'v7pxryibvy07yi1beee3su16',
  }
})