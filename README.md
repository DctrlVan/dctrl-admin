## Welcome to dctrl app.

//TODO: Write a detailed introduction of why we created this, and why we want more communities to use it.



## Installation

Start by cloning this repo. In the new folder do:
- `npm install`

Once npm is installed, you can start the dev server by running the following:
- `npm run dev`



The admin-server depends on:
- rethinkdb: https://rethinkdb.com/docs/install/
- ~~bitcoind: https://bitcoin.org/en/bitcoin-core/~~
- ~~zmq: http://zeromq.org/intro:get-the-software~~
- btcd / lnd dev.community.lightning

You must create a `configuration.js` file.  You need to specify the following information in the file (**WARNING:** The information in the file is sensitive. Manage it accordingly):

```
module.exports = {
    rethink: {
      db: 'dctrl',
      host: 'localhost'
    },
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
    },
    nodemailer:{
        user: '',
        pass: ''
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
    .post('<ip-of-dctrladmin>:8003/events')
    .send({
        type: 'member-charged',
        memberId: '19116730-8b8d-11e7-8171-1518d628ef09',
        amount: 10,
        notes: 'dress code #15.3'
    })
    .end((err, res)=>{
        if (err) return console.log({err})
        console.log(res.body)
    })
```
