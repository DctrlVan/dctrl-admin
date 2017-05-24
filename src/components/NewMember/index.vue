<template lang='jade'>

#newmember
    shared-title(title='Create New Member')
        form
            label name
            input(type='text')
            label email
            input(type='text')
            label fob
            input(type='text')


</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'

export default {
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
