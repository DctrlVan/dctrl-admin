<template lang='jade'>
.bounty.row
    div
        li(@click="toggleOpen") >>>> {{ x.name }}
        div(v-show="open")
            p {{ x.description }}
            .bits {{ x.amount }} bits
                claim-btn(:x='x._id')
            tag(v-for='x in x.tags', :x='x')

</template>

<script> // ES6


import ClaimBtn from './ClaimBtn'
import Tag from './Tag'
import ReserveBtn from './ReserveBtn'

export default {
    data(){
        return {
            open:false
        }
    },
    methods:{
        toggleOpen(){
            this.open = !this.open
        }
    },
    props: ['x'],
    components: { Tag, ClaimBtn, ReserveBtn },

}

</script>
<style lang='stylus' scoped>

@import '../../../styles/colours'

.bounty
    border-color:mainDark
    border-width:3px
    padding:0
    margin:0

li
    color: mainLight
    border-bottom: 1px solid black
    margin-bottom: 0;
    padding: 0.65rem 20px;
    list-style: none;
    display: inline-block;
    clear:both
    background:mainDark
    width:100%
.bits
    font-size:.9em
    float:right

p
    padding: .1em 1.5em 0em 1.5em
    margin:1em
    width: 70%

</style>
