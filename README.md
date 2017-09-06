## Welcome to dctrl app.

Start by cloning this repo. In the new folder do:
- `npm install`

This will start the dev server
- `npm run dev`

The admin-server depends on:
- rethinkdb: https://rethinkdb.com/docs/install/
- bitcoind: https://bitcoin.org/en/bitcoin-core/

You must create a new file in the root of the directory, and call it `configuration.js`. You need to specify the following information in the file:    
```
module.exports = {
    rethinkLocation: "localhost",
    secret: "copay wallet seed random words secret very...",
    bitcoindClient: {
        host: 'localhost',
        port: 8332,
        user: 'whoyou',
        pass: 'lol'
    },
    bitcoinAverage: {
        pub: "3232...",
        secret: "HSDH..."
    }
}
```
``
Once the above are started run
- `npm run serve`

When running the server exposes an api defined in the file `./adminSrc/router.js`.

For example to charge a member manually for dress code infractions:
```
const request = require('superagent')
request
    .post('<ip-of-dctrladmin>:8003/member_charge')
    .send({
        memberId: '19116730-8b8d-11e7-8171-1518d628ef09',
        amount: 10,
        notes: 'dress code #15.3'
    })
    .end((err, res)=>{
        if (err) return console.log({err})
        console.log(res.body)
    })
```
