<template>

<button @click="openClaimingModal">
    Claim
</button>

</template>

<script>

export default {
    props:['x'],
    methods:{
        openClaimingModal(){
            this.$store.commit('setClaimId', this.x)
        }
    }
}

</script>


<style lang='stylus' scoped >

button {
    margin: 5px
    cursor:pointer
    z-index: 1e10
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
    padding: 0px 12px
}

</style>
