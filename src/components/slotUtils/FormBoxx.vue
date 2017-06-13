<template lang='jade'>

form
    div(v-if='response')
        {{ response }}
    slot(v-else)
    button(v-if='!response' @click.prevent='post') {{ btntxt }}

</template>

<script>

import request from 'superagent'

export default {
    data(){
      return { response: '' }
    },
    props: ['endpoint', 'data', 'btntxt'],
    methods: {
      post(){
        console.log("to backend::", this.data)
        request
            .post(this.endpoint)
            .send(this.data)
            .end((err,res)=>{
                this.response = res.body
                // todo show res data, hide slot?
            })
      },
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

form
  border-style:dotted
  border-width:1px
  padding: 2em
  width:100%

button
  width: 100%
  color:accent2
  border-color: accent2

input
  width:100%


</style>
