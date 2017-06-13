<template lang='jade'>

form
    div(v-if='response')
        div(v-if='response.error')
            h5 Uh oh something went wrong, check your fields.
        div(v-if='response.type')
            h5 Event Successfully Created
            p {{ response }}
            router-link(to='/')
                button ok
    slot(v-else)
    button(v-if='!response' @click.prevent='post') {{ btntxt }}

</template>

<script>

import request from 'superagent'

export default {
    data(){
      return { response: null }
    },
    props: ['endpoint', 'data', 'btntxt'],
    methods: {
      post(){
        console.log("to backend::", this.data)
        this.response = {} // hides forms
        request
            .post(this.endpoint)
            .send(this.data)
            .end((err,res)=>{
                this.response = res.body
                if (this.response.error){
                    setTimeout( ()=>{ this.response = null } , 5000)
                }
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
