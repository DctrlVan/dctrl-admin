<template lang='jade'>
.bounty.row
    h6(@click="toggleOpen") {{ x.name }}
        .bits
            img(v-if="x.monthlyBudget", src='../../../assets/images/bullet.svg')
            span {{ Math.round( x.amount ) }} bits
    transition(name='slide-fade')
        expanded(:x='x' v-show='open')

</template>

<script>

import Expanded from './Expanded'

export default {
    data(){
        return {
            open:false,
        }
    },
    methods:{
        toggleOpen(){
            this.open = !this.open
        }
    },
    props: ['x'],
    components: { Expanded },
}

</script>



<style lang='stylus' scoped>

@import '../../../styles/colours'

h6
    padding-bottom:0
    margin-bottom:0

.bounty
    color:accent1
    padding:0
    margin:0
    border-bottom-style:solid
    border-color:accent3
    padding-top:.9em
    padding-bottom:.9em

.bits
    font-size:.9em
    float:right

.slide-fade-enter-active
    transition: all 1.5s ease
    max-height:300px

.slide-fade-enter, .slide-fade-leave-to
    opacity: 0;
    max-height:0

</style>
