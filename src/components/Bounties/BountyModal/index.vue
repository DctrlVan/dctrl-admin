<template lang='jade'>
.bounty
    h6 Testcam {{ x.amount }}
    .row
        .three.columns
            button claim
        .nine.columns
            p test lorum ipsum test lorum ipsum test lorum ipsum test lorum ipsum test lorum ipsum

</template>

<script>

import Expanded from './Expanded'

export default {
    props: ['x'],
}

</script>



<style lang='stylus' scoped>

@import '../../../styles/colours'

h6
    cursor: pointer
    padding-bottom:0
    margin-bottom:0
    color: main


button
    color: white
    background: teal

.bounty
  margin-bottom:30px
  border-style:solid
  border-color:accent1
  background:accent2
  padding:1em




</style>
