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
    margin-top:-25px
    float:right
    width:33%
    background-color: transparent
    color: white;
    cursor:pointer
    z-index: 1e10
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 8px;
    border-style:none
    padding: 0px 12px
}

button:hover
    color:accent2


</style>
