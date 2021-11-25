const CracoAliasPlugin = require('craco-alias');

const config = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.base.json',
      },
    },
  ],
};

module.exports = config;
