import { defineConfig } from 'orval'

export default defineConfig({
  matrixSynapseAdminApi: {
    input: './docs/api.yaml',
    output: {
      override: {
        mutator: {
          path: '../custom-instance.ts',
          name: 'customInstance',
        },
      },
      workspace: './src/types',
      target: './api.ts',
      client: 'axios-functions',
      mode: 'split',
    },
  },
})
