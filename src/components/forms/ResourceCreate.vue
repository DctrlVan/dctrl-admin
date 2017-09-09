<template lang='jade'>
#newresource
	shared-title(title='Create New Resource')
	form-box(btntxt="Welcome New Resource"  endpoint='/resource_create' v-bind:data='resource')
			label Resource Name
			input(v-model='resource.name' type='text' )
			label How To Use This Resource
			input(v-model='resource.howTo' type='text' )
			label Where is it?
			input(v-model='resource.location' type='text' )
			//- label Resource QR Code! (scan it)
			//- input(type='file')
			//TODO: needs to be fixed

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
