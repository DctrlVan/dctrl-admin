<template lang='jade'>

.bounty.row
    .claimed {{ x.claimed }}
    .row
        .six.columns
            h5 {{ x.name }}: {{ x.amount }} bits
            button(@click='claim(x._id)') CLAIM
        .six.columns
            p {{ x.description }}
    tags(:x='x.tags')
    hr

</template>
<script> // ES6
import Tags from './Tags'
let loadTime = Date.now()

export default {
    props: ['x'],
    components: { Tags },
    methods: {
        claim(){
            console.log('claim clicked')
            this.$store.commit('setIsUserClaiming', true)
        }
    }
}

</script>
<style lang='stylus' scoped>
h5
    font-weight:bolder


</style>
