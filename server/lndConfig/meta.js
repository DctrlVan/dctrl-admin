const fs = require('fs')
const config = require('./index')
const grpc = require('grpc')
const macaroonFile = fs.readFileSync(config.macaroon)
const meta = new grpc.Metadata()
meta.add('macaroon', macaroonFile.toString('hex'))

module.exports = meta
