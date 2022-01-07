import webpack from 'webpack'
import { merge } from 'webpack-merge'
import webpackBase from './webpack.base.js'

export default merge(webpackBase, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'ENV': JSON.stringify('development')
        })
    ]
})

