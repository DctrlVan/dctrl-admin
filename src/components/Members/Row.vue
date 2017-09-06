<template lang='jade'>

tr
    td
        dctrl-active(:m='m')
    td
        span {{m.name}}
    td
        span {{bal}}
    td
        router-link.pad(:to='payLocation')
            img.pay(src='../../assets/images/cash1.svg')
        router-link(:to='payBtcLocation')
            img.pay(src='../../assets/images/bitcoin.svg')
    td
        router-link(:to='memberLocation')
            img(src='../../assets/images/calendar.svg')

</template>


<script>
import DctrlActive from './DctrlActive'

export default {
    props: ['m'],
    components: {DctrlActive},
    computed: {
        payLocation(){
            return '/MEMBER_PAID/' + this.m.memberId
        },
        chargeLocation(){
            return '/MEMBER_CHARGED/' + this.m.memberId
        },
        payBtcLocation(){
            return '/MEMBER_PAID_BTC/' + this.m.memberId
        },
        memberLocation(){
            return '/MEMBER/' + this.m.memberId
        },
        bal(){
            return parseFloat(this.m.balance).toFixed(2)
        },
    }
}

</script>

<style lang="stylus" scoped>
@import '../../styles/colours'

.or
    font-size: 1.3em

.pad
    margin-right: 5px

span
    color: accent3
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
    height: 45px

td
    border-color: accent4
    vertical-align:middle

</style>
