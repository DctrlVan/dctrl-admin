<template lang='jade'>

tr
    td
        router-link(:to='claimLocation')
            img(src='../../assets/images/claim.svg')
    td {{b.name}}
    td {{currentValue}}
    td
        li(v-for='i in instructions') {{i}}.
    td
        router-link(:to='editLocation')
            img.pencil(src='../../assets/images/control.svg')
        router-link(:to='boostLocation')
            img(src='../../assets/images/boost.svg')

</template>

<script>

import {calculateBountyPayout} from '../../../adminSrc/calculations'

export default {
    props: ['b'],
    mounted(){
        this.currentValue = calculateBountyPayout(this.b).toFixed(2)
        setInterval( ()=>{
            this.currentValue = calculateBountyPayout(this.b).toFixed(2)
        },11111)
    },
    data() {
        return {
            currentValue: '...calculating'
        }
    },
    computed: {
        instructions(){
            return this.b.description.split('.').filter(Boolean)
        },
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

li
    text-align: left

</style>
