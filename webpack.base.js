import path from 'path'
import webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const defineBasePlugin = (env) => (new webpack.DefinePlugin({
    'API': JSON.stringify(env === 'production' ? '/api' : 'http://localhost:8081/api')
}))

export default {
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