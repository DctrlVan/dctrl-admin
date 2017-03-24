<template lang='jade'>
.bounty
    h5 {{x.name}}
        span.bits    {{ x.amount }} bits
    .row
        .three.columns
            button claim
        .nine.columns
            p {{ x.description }}


</template>

<script>

import Expanded from './Expanded'

export default {
    props: ['x'],
}

</script>



<style lang='stylus' scoped>

@import '../../../styles/colours'

h5
  cursor: pointer
  padding-bottom:0
  margin-bottom:.5em
  color: white
  font-family:sans-serif


button

  color: white
  background: teal
  font-family:sans-serif

.bounty
  margin-bottom: 30px
  background:main
  border-style:solid
  border-width:3px
  border-color:teal
  padding:1em
  color: white
  cursor:pointer

.bits
  font-size:22px
  color: gold

p
    font-size: 14px
    margin-top:-6.1px
</style>
