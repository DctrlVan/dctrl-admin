<template lang='pug'>

form(v-on:submit.prevent="")
    .response(v-if='response')
        div(v-if='showError')
            .three.columns
                img(src='../../assets/images/clippy.svg')
            .nine.columns
                h3 ERROR: {{ errTxt }}
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
            .set('Authorization', this.$store.state.loader.token)
            .send(this.data)
            .end((err,res)=>{
                if (err){
                    vue.showError = true
                    vue.errTxt = res.body[0]
                    return setTimeout( ()=>{
                      vue.response = false
                    } , 3456)
                } else {
                    vue.$router.push('/')
                }

            })
      },
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'
@import '../../styles/framework'
@import '../../styles/button'

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

input
  width:100%

img
  width: 100%

</style>
