const webpack = require("webpack");

module.exports = {
    entry: {
        vendor: ["vue"],
        app: "./src/index.ts"
    },
    
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
    },
    
    resolve: {
        extensions: [".ts", ".vue", ".js"]
    },
    
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [ /.vue$/ ]
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    esModule: true
                }
            }
        ]
    },
    
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ]
}