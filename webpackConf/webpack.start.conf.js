const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const startWebpackConfig = merge(baseWebpackConfig,
    {
        entry: `${baseWebpackConfig.externals.path.src}/index.tsx`,
        mode: "development",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.js"
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `${baseWebpackConfig.externals.path.src}/index.html`
            })
        ]
    }
)

module.exports = new Promise((resolve) => {
    resolve(startWebpackConfig)
})