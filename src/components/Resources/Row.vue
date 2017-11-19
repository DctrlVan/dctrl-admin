<template lang='pug'>

  tr(@click='toResourceLocation')
      td
          current(v-for='memberId in currentMembers', :memberId='memberId')
      td.p
          dctrl-map(:r='r')
      td {{r.name}}
      td {{r.instructions}}

</template>

<script>
import DctrlMap from './DctrlMap'
import Current from './Current'

export default {
  props: ['r'],
  components: {DctrlMap, Current},
  methods:{
      toResourceLocation(){
          this.$router.push( '/RESOURCE/' + this.r.resourceId)
      },
  },
  computed: {
      currentMembers(){
          let currentMembers = []
          this.r.current.forEach(curr => {
              if ( currentMembers.indexOf(curr.memberId) !== -1 ){
                  currentMembers.push(curr.memberId)
              }
          })
          return currentMembers
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

tr
    border-color: accent4
    border-top-style: solid
    border-bottom-style: solid
    border-width: 3px
    vertical-align:middle
    width:100%
    cursor: pointer

</style>
