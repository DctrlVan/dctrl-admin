<template lang='jade'>

form(v-on:submit.prevent="")
    div(v-if='response')
        div(v-if='response.error')
            h5 Uh oh something went wrong, check your fields.
        .row(v-if='response.type')

    slot(v-else)
    .hidden
        input#fob(v-model='memberFob' type='text')
    button(v-if='!response' @click.prevent='post') {{ btntxt }}

</template>

<script>
import request from 'superagent'

export default {
    data(){
      return {
          response: false,
          memberFob: ""
       }
    },
    props: ['endpoint', 'data', 'btntxt'],
    components: { },
    methods: {
      post(){
        let vue = this
        this.response = {} // hides forms

        request
            .post('/events' + this.endpoint)
            .send(this.data)
            .end((err,res)=>{
                console.log({err, resBody: res.body})
                if (err){
                    this.response.error = true
                    setTimeout( ()=>{ this.response = false } , 5000)
                }
                if (res.body && res.body.error){
                    setTimeout( ()=>{ this.response = false } , 5000)
                }
                vue.$router.push('/')
            })
      },
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

.hidden
  display:none


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
