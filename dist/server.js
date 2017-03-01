'use strict'

const http = require('http')
const mime = require('mime-types')
const path = require('path')

const {buildPath, changeDir, log, reqHandler} = require('./server-utils')

// host and port can be passed as arguments - e.g. node server/server.js mylocal 9000
const host = process.argv[2] || 'localhost'
const port = process.argv[3] || 8081

changeDir(buildPath)

http.createServer(reqHandler)
    .listen(port, () => {
        log(`Server running at http://${host}:${port}`)
        log('CTRL+C to shutdown', 'info')
    })
