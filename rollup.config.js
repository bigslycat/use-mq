import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import flowEntry from 'rollup-plugin-flow-entry';
import clear from 'rollup-plugin-clear';

import packageJson from './package.json';

const { dependencies, peerDependencies } = packageJson;

const deps = [
  ...Object.keys(dependencies),
  ...Object.keys(peerDependencies),
].join('|');

const reg = deps && new RegExp(`^(${deps})($|/)`);

const banner = `
/**
 * ${packageJson.name} v${packageJson.version}
 * ${packageJson.description}
 */
`;

const external = id => !!reg && reg.test(id);

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    banner,
  },
  plugins: [
    clear({
      targets: ['lib'],
    }),
    flowEntry(),
    babel(),
    commonjs(),
  ],
  external,
};
