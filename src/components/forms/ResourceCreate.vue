<template lang='pug'>
#newresource
	shared-title(title='Space Uses')
	form-box(btntxt="Create Resource"  event='resource-created' v-bind:data='resource')
			label name
			input(v-model='resource.name' type='text')
			label location
			input(v-model='resource.location' type='text')
			label instructions
			input(v-model='resource.instructions' type='text')
			label charged
			input(v-model='resource.charged' type='number')

</template>

<script>
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
  data() {
    return {
      resource: {
				name: '',
				location: '',
				instructions: '',
				charged: 0,
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
