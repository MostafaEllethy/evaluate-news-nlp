import { merge } from 'webpack-merge'
import webpackBase, { defineBasePlugin } from './webpack.base.js'

const MODE = 'development'

export default merge(webpackBase, {
    mode: MODE,
    devtool: 'source-map',
    plugins: [
        defineBasePlugin(MODE)
    ]
})

