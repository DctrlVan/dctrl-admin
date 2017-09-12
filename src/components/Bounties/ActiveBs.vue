<template lang='jade'>

tr
    td
        router-link(:to='claimLocation')
            img(src='../../assets/images/claim.svg')
    td {{b.name}}
    td {{currentValue}}
        span(v-if='b.boost > 0').boost (+ {{b.boost}})
    td
        router-link(:to='editLocation')
            img.pencil(src='../../assets/images/control.svg')
    td
        router-link(:to='boostLocation')
            img(src='../../assets/images/boost.svg')
    td
        {{b.description}}

</template>

<script>

import {calculateBountyPayout} from '../../../adminSrc/calculations'

export default {
    props: ['b'],
    mounted(){
        this.currentValue = calculateBountyPayout(this.b).toFixed(6)
        setInterval( ()=>{
            this.currentValue = calculateBountyPayout(this.b).toFixed(6)
        },1111)
    },
    data() {
        return {
            currentValue: '...calculating'
        }
    },
    computed: {
        boostLocation(){
            return '/BOUNTY_BOOST/' + this.b.bountyId
        },
        editLocation(){
            return '/BOUNTY_EDIT/' + this.b.bountyId
        },
        claimLocation(){
            return '/BOUNTY_CLAIM/' + this.b.bountyId
        }
    },
}

</script>

<style lang="stylus" scoped>

@import '../../styles/colours'

td
    color: accent3
    vertical-align: middle
    font-size: 1.4em
    text-align: center

.pencil
    height: 39px

img
    height: 55px

</style>
