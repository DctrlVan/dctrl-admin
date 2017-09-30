## Welcome to dctrl app.

Start by cloning this repo. In the new folder do:
- `npm install`

Once npm is installed, you can start the dev server by running the following:
- `npm run dev`

The admin-server depends on:
- rethinkdb: https://rethinkdb.com/docs/install/
- bitcoind: https://bitcoin.org/en/bitcoin-core/

We suggest you install rethinkdb, and run a full bitcoin node on the computer intended to run this application.  Alternatively, you can point to a computer you trust that is doing this for you, by replacing `localhost` with the IP address of that computer you trust, which would look something like `192.168.0.1`, and you do so, by modifying the configuration.js file, which is described in the following section.

Once you have rethinkdb installed, run the following command in the terminal to start the rethinkdb process:
- `rethinkdb --bind all `

You must create a new file in the root of the directory, and call it `configuration.js`. You need to specify the following information in the file (**WARNING:** The information in the file is sensitive. Manage it accordingly):

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

Once the above are started, run the following command:
- `npm run serve`

When running, the server exposes an api defined in the file `./adminSrc/router/EventApi.js`.


For example to charge a member manually for dress code infractions, you can run the following command using node (either by typing `node` and then copying and pasting the following code block, or saving the following code in a `.js` file, and running it, by typing `node` and then the `.js` fije that you just created):

```
const request = require('superagent')
request
    .post('<ip-of-dctrladmin>:8003/events/member_charge')
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
