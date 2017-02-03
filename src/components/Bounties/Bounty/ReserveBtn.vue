<template>

<button @click="openClaimingModal(x)">
    Reserve
</button>

</template>

<script>

export default {
    props:['x'],
    methods:{
        openClaimingModal(_id){
            this.$store.commit('setIsUserReserving', true)
        }
    }
}

</script>


<style lang='stylus' scoped >

button {
    margin: 5px
    cursor:pointer
    background-color: darkgreen
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
