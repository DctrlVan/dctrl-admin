<template lang='jade'>

tr
    td
        div(v-if='m.active > 0')
            img.image(v-if='m.active == 1' src='../../assets/images/active1.svg')
            img.image(v-if='m.active == 2' src='../../assets/images/active2.svg')
            img.image(v-if='m.active == 3' src='../../assets/images/active3.svg')
            img.image(v-if='m.active == 4' src='../../assets/images/active4.svg')
            img.image(v-if='m.active == 5' src='../../assets/images/active5.svg')
            img.image(v-if='m.active == 6' src='../../assets/images/active6.svg')
            img.image(v-if='m.active == 7' src='../../assets/images/active7.svg')
            img.image(v-if='m.active == 8' src='../../assets/images/active8.svg')
            img.image(v-if='m.active == 9' src='../../assets/images/active9.svg')
            img.image(v-if='m.active == 10' src='../../assets/images/active10.svg')
            img.image(v-if='m.active == 11' src='../../assets/images/active11.svg')
            img.image(v-if='m.active == 12' src='../../assets/images/active12.svg')
            img.image(v-if='m.active == 13' src='../../assets/images/active13.svg')
            img.image(v-if='m.active == 14' src='../../assets/images/active14.svg')
            img.image(v-if='m.active >= 15' src='../../assets/images/active15.svg')
        img(v-else src='../../assets/images/inactive.svg')
    td
        span {{m.name}}
    td
        span {{bal}}
    td
        router-link(:to='memberLocation')
            img(src='../../assets/images/calendar.svg')
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
            return '/MEMBER_PAID/' + this.m['member-id']
        },
        chargeLocation(){
            return '/MEMBER_CHARGED/' + this.m['member-id']
        },
        payBtcLocation(){
            return '/MEMBER_PAID_BTC/' + this.m['member-id']
        },
        memberLocation(){
            return '/MEMBER/' + this.m['member-id']
        },
        bal(){
            return parseFloat(this.m.balance).toFixed(2)
        },
    }
}

</script>

<style lang="stylus" scoped>

@import '../../styles/colours'

.image {
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
@-ms-keyframes spin {
  from { -ms-transform: rotate(0deg); }
  to { -ms-transform: rotate(360deg); }
}
@-moz-keyframes spin {
  from { -moz-transform: rotate(0deg); }
  to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  from { -webkit-transform: rotate(0deg); }
  to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
}

.or
    font-size: 1.3em

.pad
    margin-right: 5px

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

td
    border-color: accent4
    vertical-align:middle

// TODO: style .inactive / or .active

</style>
