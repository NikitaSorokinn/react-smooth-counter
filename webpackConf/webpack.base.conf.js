const path = require('path');

const PATHS = {
    src: path.join(__dirname, '../src')
}

module.exports = {
    externals: {
        path: PATHS
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    }
}