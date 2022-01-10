const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base.js')
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = (env, options) => {
    return merge(webpackBase(options), {
        plugins: [new GenerateSW()]
    })
}