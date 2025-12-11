import { defineConfig } from 'tsdown';


export default defineConfig({
  entry: ['src/index.ts'],
  skipNodeModulesBundle: false,
  noExternal: [/./],
  shims: true,
  format: {
    esm: {
      target: ['node22'],
    },
  },
});
