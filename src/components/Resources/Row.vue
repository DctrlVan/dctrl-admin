<template lang='pug'>

.resources
    h3.stock {{ r.stock }}
    h3 {{ r.name }}
    .row
        .six.columns
            label recently used by:
            current(v-for='memberId in currentMembers', :memberId='memberId')
        .six.columns
            router-link(:to='"/invoices/" + r.resourceId')
                button(@click='createPayRec')
                    img.r(src='../../assets/images/lightning.svg')
                    img.r(src='../../assets/images/lightning.svg')
                    img.l(src='../../assets/images/lightning.svg')
                    img.l(src='../../assets/images/lightning.svg')
                    span {{ sats.toLocaleString() }} sats = ${{ r.charged.toLocaleString() }}
            router-link(:to='"/resource_stock/" + r.resourceId')
                button.refill replenish

</template>

<script>
import request from 'superagent'
import Current from './Current'

export default {
    props: ['r'],
    components: { Current },
    computed: {
        currentMembers(){
            return this.r.current.slice().map(ev => ev.memberId)
        },
        sats(){
            let sats = this.r.charged / this.$store.state.cash.spot * 100000000
            return Math.round(sats).toLocaleString()
        },
    },
    methods: {
        createPayRec(){
            console.log('creating payment request? ')
            request
                .post('/events')
                .set('Authorization', this.$store.state.loader.token)
                .send({
                    type: 'invoice-created',
                    value: this.sats,
                    memo: this.r.name,
                    ownerId: this.r.resourceId
                })
                .end((err,res)=>{
                    if (err) return console.log(err);
                    console.log('createPayRec:', res.body)
                })
        }
    }
}

</script>

<style lang="stylus" scoped>

@import '../../styles/button'
@import '../../styles/grid'
@import '../../styles/colours'

img
    height: 1.5em
    z-index: 100

.r
    float: right

.l
    float: left

.resources
    width: 100%
    border-style: dotted
    border-color: accent2
    border-width: 1px
    padding: 1em

.stock
    float: right
    color: accent2

.refill
    color: main
    background: green
    border-color: green

</style>
