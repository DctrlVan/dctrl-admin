<template lang='pug'>

form(v-on:submit.prevent="")
    .response(v-if='response')
        div(v-if='showError')
            .three.columns
                img(src='../../assets/images/clippy.svg')
            .nine.columns
                h1 ERROR: {{ errTxt }}
        .row(v-if='response.type')
    slot(v-else)
    button(v-if='!response' @click.prevent='post') {{ btntxt }}

</template>

<script>
import request from 'superagent'

export default {
    data(){
      return {
          response: false,
          memberFob: "",
          showError: false,
          errTxt: '...'
       }
    },
    props: ['event', 'data', 'btntxt'],
    components: { },
    methods: {
      post(){
        let vue = this
        vue.response = true // hides forms
        vue.data.type = vue.event
        request
            .post('/events')
            .send(this.data)
            .end((err,res)=>{
                console.log({err, resBody: res.body})
                if (err){
                    vue.showError = true
                    vue.errTxt = res.body[0]
                    return setTimeout( ()=>{
                      vue.response = false
                    } , 3456)
                }
                vue.$router.push('/')
            })
      },
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'
@import '../../styles/framework'

.response
  color: red

img
  height: 17em

form
  padding: 0em
  width:95%
  color: accent1
  margin: 1em

label
  font-family: sans-serif
  font-weight: lighter
  font-size: 1.2em

button
  width: 100%
  color:main
  background:accent2
  border-color: accent2
  font-family: sans-serif
  font-weight: lighter
  font-size: 1.2em

input
  width:100%

img
  width: 100%

</style>
