const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (options) => {
    return {
        entry: './src/client/index.js',
        output: {
            path: path.resolve(process.cwd(), 'dist'),
            libraryTarget: 'var',
            library: 'Client'
        },
        module: {
            rules: [
                {
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'ENV': JSON.stringify(options.mode),
                'API': JSON.stringify(options.mode === 'development' ? 'http://localhost:8081/api' : '/api')
            }),
            new HtmlWebPackPlugin({
                template: "./src/client/views/index.html",
                filename: "./index.html",
            }),
            new MiniCssExtractPlugin(),
            new CleanWebpackPlugin({
                dry: true,
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
            })
        ]
    }
}