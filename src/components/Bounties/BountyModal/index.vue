<template lang='jade'>
.bounty
    h5 {{x.name}}
        span.bits    {{ x.amount }} bits
    .row
        .three.columns
            button(v-if="!x.isClaimed" @click='setClaim') claim
            button.claimed(v-else @click='setClaim') claimed
        .nine.columns
            p {{ x.description }}


</template>

<script>


export default {
    methods:{
        setClaim(){
            this.$store.commit('setClaimId', this.x._id)
        }
    },
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
  background: accent1
  font-family:sans-serif

.claimed
  background:accent2
  color:main

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
