const test = require('tape')
const request = require('superagent')

// test('Can trigger task claimed with two taps: ', assert => {
//     request
//         .post('http://192.168.0.110:8003/fobtap')
//         .send({
//             fob: '0000000000'
//         })
//         .end( (err, res) => {
//             console.log('first res')
//             console.log(res.body)
//             assert.notOk(err)
//             request.post('http://192.168.0.110:8003/fobtap')
//               .send({
//                   fob: '0003182073'
//               })
//               .end( (err, res) => {
//                   console.log(res.body)
//                   assert.notOk(err)
//                   assert.end()
//               })
//         })
// })


test('Can trigger resource used: ', assert => {
    console.log('posting it')
    request
        .post('http://localhost:8003/fobtap')
        .send({
            fob: '0008201890',
            resourceId: 'f3e0a850-9f31-11e7-b78b-75fa56fec78b'
        })
        .end( (err, res) => {
            assert.notOk(err)
            assert.end()
        })
})
