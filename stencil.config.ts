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
    {
      type: 'dist-custom-elements',
    }
  ],
  sourceMap: false,
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
