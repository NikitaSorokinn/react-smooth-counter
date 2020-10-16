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
            react: "react"
        }
    }
)

module.exports = new Promise((resolve) => {
    resolve(buildWebpackConfig)
})