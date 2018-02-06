<template lang='pug'>

tr
    td
        router-link(:to='claimLocation')
            img(src='../../assets/images/claim.svg')
        span.val ${{currentValue}}
    td {{b.name}}
    td
        li(v-for='i in instructions') {{i}}.
    td
      router-link(:to='historyLocation')
        img(src='../../assets/images/calendar.svg')

</template>

<script>

import {calculateTaskPayout} from '../../calculations'

export default {
    props: ['b'],
    data() {
        return {
            currentValue: '...calc'
        }
    },
    mounted(){
        this.currentValue = calculateTaskPayout(this.b).toFixed(2)
        setInterval( ()=>{
            this.currentValue = calculateTaskPayout(this.b).toFixed(2)
        },11111)
    },
    computed: {
        instructions(){
            return this.b.instructions.split('.').filter(Boolean).slice(0,2)
        },
        boostLocation(){
            return '/TASK_BOOST/' + this.b.taskId
        },
        editLocation(){
            return '/TASK_EDIT/' + this.b.taskId
        },
        claimLocation(){
            return '/TASK_CLAIM/' + this.b.taskId
        },
        historyLocation(){
            return '/TASK/' + this.b.taskId
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

.val
    color: accent2

.pencil
    height: 39px

img
    height: 55px

li
    text-align: left

tr
    border-color: accent4
    border-top-style: solid
    border-bottom-style: solid
    border-width: 3px
    vertical-align:middle
    width: 100%

</style>
