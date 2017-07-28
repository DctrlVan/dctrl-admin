<template lang='jade'>

tr
    td.bkg
        span.name {{m.name}}
    td.small {{m.address}}
    td {{m.balance}}
    td
        button(@click='switchToMember(m.address)') details
    td
        input(type="checkbox")
    td
        button(@click='') pay
    td
        button(@click='') charge


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

@import '../../styles/colours'

.bkg
    background: accent3

.small
    font-size: .3em

.name
    color: main
    font-size: 1.3em
    text-align: center
    margin: 10px
    width:100%
    padding:1em

// TODO: style .inactive / or .active

</style>
