<template lang='pug'>

tr(class="")
    td
        label {{ m.balance.toFixed(2) }}
    td
        dctrl-active(:m='m')
    td
        span {{ m.name }}
    td
        router-link(:to='payStuffLocation')
            img.pay(src='../../assets/images/abundance.svg')
        router-link(:to='payBtcLocation')
            img.pay(src='../../assets/images/bitcoin.svg')
        router-link.pad(:to='payLocation')
            img.pay(src='../../assets/images/cash1.svg')
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
        payStuffLocation(){
            return '/MEMBER_PAID_STUFF/' + this.m.memberId
        },
        memberLocation(){
            return '/calendar/' + this.m.memberId
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
    height: 4em
    padding-left: .2345em
    padding-right: .2345em

.active
.pending
.inactive

tr
    border-left-color: accent2
    border-bottom-color: accent5
    border-top-color: accent5
    border-style: dotted
    border-right-style: none
    border-left-style: none
    border-width: 2px
    vertical-align:middle

td
    padding: .3em

</style>
