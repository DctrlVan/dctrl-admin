<template lang='pug'>

tr
    td
        current(v-for='memberId in r.current', :memberId='memberId')
    td.p
        dctrl-map(:r='r')
        span {{r.location}}
    td
        span {{r.howTo}}
    td
      router-link(:to='resourceLocation')
          img(src='../../assets/images/calendar.svg')



</template>

<script>
import DctrlMap from './DctrlMap'
import Current from './Current'

export default {
  props: ['r'],
  components: {DctrlMap, Current},
  computed: {
      payBtcLocation(){
          return '/RESOURCE_PAID_BTC/' + this.r.resourceId
      },
      resourceLocation(){
          return '/RESOURCE/' + this.r.resourceId
      },
      resourceUseLocation(){
          return '/RESOURCE_USE/' + this.r.resourceId
      },
  },
}

</script>

<style lang="stylus" scoped>
@import '../../styles/colours'

.p
    background: accent1

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
