import { merge } from 'webpack-merge'
import webpackBase from './webpack.base.js'
import { GenerateSW } from 'workbox-webpack-plugin'

export default merge(webpackBase, {
    mode: 'production',
    plugins: [
        new GenerateSW()
    ]
})
