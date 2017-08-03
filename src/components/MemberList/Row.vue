<template lang='jade'>

tr
    td
        span.name {{m.name}}
    td.small {{m.address}}
    td {{m.balance}}
    td
        button(@click='switchToMember(m.address)') &#9776;
    td
        input(type="checkbox")
    td
        router-link(:to='payLocation')
            img(src='../../assets/images/cash1.svg')

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

<style lang="stylus" scoped>

@import '../../styles/colours'

.name
    color: accent2
    font-size: 1.4em
    text-align: center
    margin: 10px
    width:100%
    padding:1em


.small
    font-size: .5em

button
    background: accent2
    color: black
    border: none

img
    height: 55px

// TODO: style .inactive / or .active

</style>
