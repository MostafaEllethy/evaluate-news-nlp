import { merge } from 'webpack-merge'
import webpackBase, { defineBasePlugin } from './webpack.base.js'
import { GenerateSW } from 'workbox-webpack-plugin'

const MODE = 'production'

export default merge(webpackBase, {
    mode: 'production',
    plugins: [
        new GenerateSW(),
        defineBasePlugin(MODE)
    ]
})
