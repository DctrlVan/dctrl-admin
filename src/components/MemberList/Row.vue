<template lang='jade'>

tr
    td.bkg
        span.name {{m.name}}
    td.small {{m.address}}
    td {{m.balance}}
    td
        button(@click='switchToMember(m.address)') &#9776;
    td
        input(type="checkbox")
    td
        router-link(:to='payLocation')
            button() pay
    td
        router-link(:to='chargeLocation')
            button(@click='') charge


</template>


<script>



export default {
    props: ['m'],
    computed: {
        payLocation(){
            return '/MEMBER_PAID/' + this.m.address
        },
        chargeLocation(){
            return '/MEMBER_CHARGED/' + this.m.address
        }
    },
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
