const typescript = require('rollup-plugin-typescript2');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const pkg = require('./package.json');
module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      tsconfigOverride: { compilerOptions: { module: 'es2015' } },
      typescript: require('typescript')
    })
  ]
};
