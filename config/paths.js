'use strict'

const path = require('path')

const dirSrc = path.resolve(__dirname, '../src')
const dirPublic = path.resolve(__dirname, '../public')
const dirAssets = path.join(dirPublic, 'assets')
const dirDist = path.join(dirPublic, 'dist')
const dirSassPartials = path.join(dirPublic, 'stylesheets/partials')

module.exports = {
    assets: dirAssets,
    dist: dirDist,
    public: dirPublic,
    sassPartials: dirSassPartials,
    src: dirSrc
}
