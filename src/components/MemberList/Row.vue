<template lang='jade'>

tr
    td {{m.name}}
    td {{m.address}}
    td {{m.balance}}
    td
        button(@click='switchToMember(m.address)') details
    td
        input(type="checkbox") 

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

// TODO: style .inactive / or .active

</style>
