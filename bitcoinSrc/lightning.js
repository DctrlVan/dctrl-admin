
process.env.GRPC_SSL_CIPHER_SUITES = "HIGH+ECDSA" // ??
const grpc = require("grpc")
const fs = require("fs")
const config = require("../configuration")

var lnrpcDescriptor = grpc.load(config.lnd.protoPath)
var lndCert = fs.readFileSync(config.lnd.lndCertPath)
var credentials = grpc.credentials.createSsl(lndCert)
var lightning = new lnrpcDescriptor.lnrpc.Lightning(config.lnd.lndHost, credentials)

lightning
    .newWitnessAddress({}, function(err, response) {
        console.log('NewWitnessAddress: ' + response.address);
    })
