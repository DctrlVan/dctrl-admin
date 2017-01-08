<template lang='jade'>

.bounty.row
    hr
    .row
        .six.columns
            h5 {{ x.name }}: {{ x.amount }} bits
                claim-btn(:x='x._id')
                claimed(:x='x.claimedBy')
        .six.columns.description
            p {{ x.description }}
    tags(:x='x.tags')
    hr

</template>
<script> // ES6
import Claimed from './Claimed'
import ClaimBtn from './ClaimBtn'
import Tags from './Tags'
let loadTime = Date.now()

export default {
    props: ['x'],
    components: { Tags, ClaimBtn, Claimed },
    methods: {
        claim(){
            console.log('claim clicked')
            this.$store.commit('setIsUserClaiming', true)
        }
    }
}

</script>
<style lang='stylus' scoped>

hr
    height: 30px
    border-style: solid
    border-color: black
    border-width: 1px 0 0 0
    border-radius: 20px
    padding-bottom:0
    margin-bottom:0

hr:before  /* Not really supposed to work, but does */
    display: block
    content: ""
    height: 30px
    margin-top: -31px
    border-style: solid
    border-color: black
    border-width: 0 0 1px 0
    border-radius: 20px

.description
    padding: .3em .4em 0 .4em
    border-style:solid
    p
        margin:0



</style>
