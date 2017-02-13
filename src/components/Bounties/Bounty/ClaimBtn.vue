<template>
<router-link to='BOUNTIES/CLAIM' >
    <button @click="setClaim">
        Claim {{ x.amount }} bits
    </button>
</router-link>

</template>

<script>

export default {
    props:['x'],
    methods:{
        setClaim(){
            this.$store.commit('setClaimId', this.x._id)
        }
    }
}

</script>


<style lang='stylus' scoped >
@import '../../../styles/colours'

button {
    width:100%
    background-color: accent2
    color: main;
    margin: 5px
    cursor:pointer
    z-index: 1e10
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
    padding: 0px 12px
}

</style>
