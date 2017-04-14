<template lang='jade'>

.bounty
    h5 {{x.name}}
        span.bits    {{ x.amount }} bits
    .row
        .three.columns
            button(v-if="!x.isClaimed" @click='setClaim') claim
            button.claimed(v-else @click='setClaim') claimed
        .nine.columns
            div(v-if="!x.isClaimed")
                p {{ x.description }}
            div(v-else)
                p Claimed by {{ x.claimAddress }}
                p {{ x.claimNotes }}


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
@import '../../../styles/framework'

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
  border-bottom-style:solid
  border-width:2px
  cursor:pointer
  border-color:accent1
  padding:1em
  color: white
  width:100%


.bits
  font-size:22px
  color: gold

p
    font-size: 14px
    margin-top:-6.1px

</style>
