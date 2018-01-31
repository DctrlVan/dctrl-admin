
const grpc = require('grpc')
const fs = require('fs')
const config = require('./lndConfig')
const path = require('path')

const lndCert = fs.readFileSync(config.cert)
const credentials = grpc.credentials.createSsl(lndCert)
const rpc = grpc.load(path.join(__dirname, 'lndConfig/rpc.proto'))

module.exports = new rpc.lnrpc.Lightning(config.lightningHost, credentials)
