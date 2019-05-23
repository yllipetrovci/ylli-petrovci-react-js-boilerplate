/* webpack.config.js */
const path = require('path');
/* webpack.config.js */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Tell webpack to begin building its 
    // dependency graph from this file.
    entry: path.join(__dirname, 'src', 'index.js'),
    mode: 'development',
    // And to place the output in the `build` directory
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                /* We'll leave npm packages as is and not 
                   parse them with Babel since most of them 
                   are already pre-transpiled anyway. */
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
};