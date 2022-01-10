const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base.js')

module.exports = (env, options) => {
    return merge(webpackBase(options), {
        devtool: 'source-map'
    })
}
