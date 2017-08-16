<template lang='jade'>
#newmember
	shared-title(title='Create New Member')
	form-box(btntxt="Welcome New Member"  endpoint='/member_create' v-bind:data='member')
			label name
			input(v-model='member.name' type='text' )
			label email
			input(v-model='member.email' type='text')
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
        email: '',
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
