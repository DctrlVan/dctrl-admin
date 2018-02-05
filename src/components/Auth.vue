<template lang='pug'>

#auth
  .container(v-if='!confirmed')
      br
      label hackername
      input#name(type='text' v-model='name' placeholder='enter name')
      label pass -
          span(v-for="a in pass") &nbsp;*&nbsp;
      input.secret(type='text' v-model='pass')
      br
      button(@click="createSession") login
  .container(v-else)
      h3 session active
      button(@click="killSession") kill session

</template>

<script>
import request from 'superagent'
import SharedTitle from './slotUtils/SharedTitle'
import FormBox from './slotUtils/FormBox'
import uuidV1 from 'uuid/v1'
import cryptoUtils from '../crypto'

export default {
  name: 'Auth',
  components: { SharedTitle, FormBox },
  data(){

      return {
          name: '',
          pass: '',
      }
  },
  mounted(){
      // TODO: why doesn't this work?! (cursor to name field)
      // document.getElementById('name').select()
  },
  computed: {
      confirmed(){
          return this.$store.state.loader.token
      },
      id(){
          let id
          this.$store.state.members.forEach( member => {
              if (this.name === member.name) {
                  id = member.memberId
              }
          })
          return id
      }
  },
  methods: {
      createSession(){
          let session = uuidV1()
          console.log('attempting auth', this.id, this.pass)
          let sessionKey = cryptoUtils.createHash(session + this.id + this.pass)
          let token = cryptoUtils.hmacHex(session, sessionKey)
          request
              .post('/session')
              .set('Authorization', token)
              .set('Session', session)
              .set('id', this.id)
              .end((err,res)=>{
                  if (err) return console.log(err);
                  console.log('Authentication creation response', res.body)
                  this.confirmed = true
                  this.pass = ""

                  this.$store.commit('setAuth', {
                      token,
                      session,
                      id: this.id
                  })

                  window.localStorage.setItem("token", token)
                  window.localStorage.setItem("session", session)
                  window.localStorage.setItem("id", this.id)

                  this.$store.dispatch('loadCurrent')
              })
      },
      killSession(){
          //XXX tell server to remove session
          window.localStorage.removeItem("token")
          window.localStorage.removeItem("session")
          window.location.reload()
      }
  }
}
</script>

<style lang='stylus' scoped>

@import '../styles/colours'
@import '../styles/grid'
@import '../styles/button'

#auth
    width: 100%

.secret
    // color: white
    -webkit-text-fill-color: transparent; /* sets just the text color */

.container
    width: 100%

</style>
