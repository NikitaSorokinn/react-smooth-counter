const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')
const path = require('path');
const pkg = require('../package.json');

const buildWebpackConfig = merge(baseWebpackConfig,
    {
        entry: `${baseWebpackConfig.externals.path.src}/components/SmoothCounter/entry.ts`,
        mode: "production",
        output: {
            path: path.resolve('lib'),
            filename: 'AnimateCounter.js',
            library: pkg.name,
            libraryTarget: 'commonjs2',
        },
        externals: {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        }
    }
)

module.exports = new Promise((resolve) => {
    resolve(buildWebpackConfig)
})