const path = require('path')

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "typescript": {
    "check": false,
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  viteFinal: async (config) => {
    return {
      ...config,
      optimizeDeps: {
        ...config.optimizeDeps,
        // Entries are specified relative to the root
        entries: [`${path.relative(config.root, path.resolve(__dirname, '../src'))}/**/*.stories.tsx`],
        include: [...(config.optimizeDeps?.include ?? []), '@storybook/react'],
      },
      resolve: {
        ...config.resolve,
        dedupe: ['@storybook/client-api']
      }
    };
  },
};