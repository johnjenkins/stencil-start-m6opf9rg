import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'MyApp',
  srcDir: 'src',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      dir: 'public/components',
    },
    {
      type: 'dist-hydrate-script',
    },
    {
      type: 'dist',
    },
  ],
  sourceMap: true,
  minifyJs: false,
  hashFileNames: false,
  devServer: {
    root: './public',
  },
  extras: {
    experimentalScopedSlotChanges: true,
    experimentalSlotFixes: true,
  },
};
