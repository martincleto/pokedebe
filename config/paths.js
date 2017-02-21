'use strict'

const path = require('path')

const dirSrc = path.resolve(__dirname, '../src')
const dirPublic = path.resolve(__dirname, '../public')
const dirAssets = path.join(dirPublic, 'assets')
const dirDist = path.join(dirPublic, 'dist')

module.exports = {
    assets: dirAssets,
    dist: dirDist,
    public: dirPublic,
    src: dirSrc
}
