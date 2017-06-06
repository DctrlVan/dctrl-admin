<template lang='jade'>

form
    slot

</template>

<script>

export default {
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
