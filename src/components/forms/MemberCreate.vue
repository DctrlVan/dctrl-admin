<template lang='pug'>

#newmember
	shared-title(title='Create New Member')
	form-box(btntxt="Welcome New Member"  event='member-created' v-bind:data='member')
			label hacker name
			input(v-model='member.name' type='text' )
			label secret login password
			input(v-model='member.secret' type='password')
			label Member Fob! (tap it)
			input(v-model='member.fob' type='text')

</template>

<script>
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
  data() {
    return {
      member: {
        name: '',
        secret: '',
        fob: '',
      }
    }
  },
  components: {
    SharedTitle, FormBox
  }
}
</script>

<style lang='stylus' scoped>
@import '../../styles/colours'

#projects
    color:accent1
    font-family: 'Open Sans', light, sans-serif;

li
  color:white
  font-size:18px
  font-family: 'Open Sans', light, sans-serif;

h3
  font-family: 'Open Sans', light, sans-serif;
  font-size:1.6em

</style>
