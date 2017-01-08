<template>

<button class='claimbtn' @click="claim(x)">
    Claim Your Bounty!
</button>

</template>

<script>

export default {
    props:['x'],
    methods:{
        claim(_id){
            this.$store.commit('setIsUserClaiming', true)
        }
    }
}

</script>


<style lang='stylus' scoped >

.claimbtn
    color:black
    float:right


</style>
