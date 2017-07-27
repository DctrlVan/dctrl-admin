<template lang='jade'>

table
    tr
        th name
        th address
        th balance
        th inspect
        th active
    slot

</template>


<script>



export default {
    props: ['m'],
    components: {  },
    methods: {
        switchToMember(address){
            // use vuex state to pass to member component?
            console.log('this is supposed to redirect to member/' + address)
            this.$router.push('member/' + address);
        }
    }
}

</script>

<style lang="stylus">

table
    color: accent1
    text-align:center

// TODO: style .inactive / or .active

</style>
