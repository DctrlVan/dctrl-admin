<template lang='jade'>
#newresource
	shared-title(title='Create New Resource')
	form-box(btntxt="Welcome New Resource"  endpoint='/resource_create' v-bind:data='resource')
			label resource name
			input(v-model='resource.name' type='text' )
			label Resource QR Code! (scan it)
			input(type='file')
			// do we need a QRcode instead of a fob?

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
        QRcode: '', // instead of email?
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
