<template lang='jade'>

tr
    td
        img(v-if='m["active?"]' src='../../assets/images/active.svg')
        img(v-else src='../../assets/images/inactive.svg')
    td
        span {{m.name}}
    //- td.small {{m.address}}
    td
        span {{bal}}
    td
        router-link(:to='memberLocation')
            img(src='../../assets/images/hamburger.svg')
    td
        router-link.pad(:to='payLocation')
            img(src='../../assets/images/cash1.svg')
        router-link(:to='payBtcLocation')
            img(src='../../assets/images/bitcoin.svg')

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
        },
        payBtcLocation(){
            return '/MEMBER_PAID_BTC/' + this.m.address
        },
        memberLocation(){
            return '/MEMBER/' + this.m.address
        },
        bal(){
            return parseFloat(this.m.balance).toFixed(2)
        }
    }
}

</script>

<style lang="stylus" scoped>

@import '../../styles/colours'

.or
    font-size: 1.3em

.pad
    margin-right: 50px

span
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
