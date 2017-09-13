<template lang='jade'>
#newresource
	shared-title(title='Space Uses')
	form-box(btntxt="Suggest new use for the space"  endpoint='/resource_create' v-bind:data='resource')
			label Which Space?
			select(v-model='resource.location')
				option(value = "mainroom") Main Room
				option(value = "backroom") Back Room
				option(value = "hallway") Hall Way
				option(value = "recordingroom") Recording Room
			label Use it to...
			input(v-model='resource.name' type='text' )
			label How?
			input(v-model='resource.howTo' type='text' )

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
        howTo: '',
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
