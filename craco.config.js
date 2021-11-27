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
  webpack: {
    alias: {
      '@material-ui/styled-engine': '@material-ui/styled-engine-sc',
    },
  },
};

module.exports = config;
