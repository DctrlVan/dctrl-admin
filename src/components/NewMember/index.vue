<template lang='jade'>
#newmember
	shared-title(title='Create New Member')
	form
		label name
		input(v-model='member.name' type='text' )
		label email
		input(v-model='member.email' type='text')
		label fob
		input(v-model='member.fob' type='text')
		label address
		input(v-model='member.address' type='text')
	button(@click.prevent="createMember") create member
</template>

<script>
import newMember from './newMember'
import SharedTitle from '../slotUtils/SharedTitle'

export default {
  data() {
    return {
      member: {
        name: 'test',
        email: 'test',
        fob: 'test',
        address: 'test',
      }
    }
  },
  methods: {
    createMember() {
      let {
        name,
        email,
        fob,
        address
      } = this.member

      newMember(name,email,fob,address,(err, res)=> {
          console.log({err})
          console.log({res})
      })

    }
  },
  components: {
    SharedTitle
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
