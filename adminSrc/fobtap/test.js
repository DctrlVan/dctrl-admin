const test = require('tape')
const request = require('superagent')

test('Can trigger task claimed with two taps: ', assert => {
    request
        .post('http://localhost:8003/fobtap')
        .send({
            fob: '0000000000'
        })
        .end( (err, res) => {
            console.log('first res')
            console.log(res.body)
            assert.notOk(err)
            request.post('http://localhost:8003/fobtap')
              .send({
                  fob: '0003182073'
              })
              .end( (err, res) => {
                  console.log(res.body)
                  assert.notOk(err)
                  assert.end()
              })
        })
})


test('Can trigger resource used: ', assert => {
    console.log('posting it')
    request
        .post('http://localhost:8003/fobtap')
        .send({
            fob: '0000000000',
            resourceId: ''
        })
        .end( (err, res) => {
            assert.notOk(err)
            assert.end()
        })
})
