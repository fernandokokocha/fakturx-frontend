const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({filename: "css/[name].css", allChunks: true});

module.exports = {
    entry: {
      'index': './src/index.js',
      'sign_in': './src/sign_in.js',
      'invoices': './src/invoices.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }]
                }),
            }
        ]
    },
    plugins: [
        extractSass
    ]
};
