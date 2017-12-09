<template lang='pug'>

  .row
    .four.grid
      current(v-for='memberId in currentMembers', :memberId='memberId')
    .six.grid
      label {{r.resourceId}}
    .two.grid {{ r.charged }}


</template>

<script>

import Current from './Current'

export default {
  props: ['r'],
  components: {Current},
  methods:{
      toResourceLocation(){
          this.$router.push( '/RESOURCE/' + this.r.resourceId)
      },
  },
  computed: {
      currentMembers(){
          let currentMembers = []
          this.r.current.forEach(curr => {
              if ( currentMembers.indexOf(curr.memberId) === -1 ){
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
@import '../../styles/grid'

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
