'use strict'

const path = require('path')

const root = path.resolve('../')
const dirSrc = path.resolve(__dirname, '../src')
const dirAssets = path.join(dirSrc, 'assets')
const dirDist = path.resolve(__dirname, '../dist')
const dirSassPartials = path.join(dirAssets, 'stylesheets/partials')
const dirServer = path.resolve(__dirname, '../server')

module.exports = {
    assets: dirAssets,
    dist: dirDist,
    root: root,
    sassPartials: dirSassPartials,
    server: dirServer,
    src: dirSrc
}
