module.exports = {
  exclude: 'node_modules/**',
  presets: [
    '@babel/flow',
    [
      '@babel/env',
      {
        targets: { browsers: ['last 4 version', '> 1%', 'not dead'] },
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        modules: false,
      },
    ],
  ],
};
