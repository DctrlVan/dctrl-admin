## Welcome to dctrl app.

Start by cloning this repo. In the new folder do:
- `npm install`

This will start the dev server
- `npm run dev`

The admin-server depends on:
- rethinkdb: https://rethinkdb.com/docs/install/
- bitcoind: https://bitcoin.org/en/bitcoin-core/

You must change the configuration.js
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

Once the above are started run
- `npm run serve`
