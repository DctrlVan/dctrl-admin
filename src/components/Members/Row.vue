<template lang='pug'>

tr(class="")
    td
        label {{ m.balance.toFixed(2) }}
    td
        span {{ m.name }}
        dctrl-active(:m='m')
    td
        badges(:m='m')
    td
        router-link(:to='\'/calendar/\' + this.m.memberId')
            img(src='../../assets/images/calendar.svg')

</template>


<script>

import DctrlActive from './DctrlActive'
import Badges from './Badges'

export default {
    props: ['m'],
    components: {DctrlActive, Badges},
}

</script>

<style lang="stylus" scoped>
@import '../../styles/colours'

.or
    font-size: 1.3em

.pad
    margin-right: 5px

span
    color: accent1
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
