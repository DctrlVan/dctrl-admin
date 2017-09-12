<template lang='jade'>

tr
    td
    span {{r.name}}
    td
    span {{r.location}}
    td
    dctrl-active(:r='r')
    td
        span {{r.howTo}}
    td
        span {{r.address}}



</template>

<script>
import DctrlActive from './DctrlActive'

export default {
  props: ['r'],
  components: {DctrlActive},
  computed: {
      payBtcLocation(){
          return '/RESOURCE_PAID_BTC/' + this.r.resourceId
      },
      resourceLocation(){
          return '/RESOURCE/' + this.r.resourceId
      },
  }
}

</script>

<style lang="stylus" scoped>
@import '../../styles/colours'

.or
    font-size: 1.3em

.pad
    margin-right: 5px

span
    color: accent3
    font-size: 1.4em
    text-align: center
    margin: 10px
    width:100%
    padding:1em


.small
    font-size: .5em

button
    background: accent2
    color: black
    border: none

img
    height: 45px

td
    border-color: accent4
    vertical-align:middle

</style>
