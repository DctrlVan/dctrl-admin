<template lang='pug'>

router-link.crazybtn(:to='to')
    span {{text}}
    img(src='../../assets/images/active10.svg')

</template>


<script>

export default {
    props: ['to', 'text']
}


</script>

<style lang='stylus' scoped>

.crazybtn
    position: absolute
    top:50px
    right:100px
    background: accent1
    border-radius: 25px
    width: 291px
    color: main
    cursor: pointer
    font-size: 1.4em
    text-decoration: none
    border-style: solid
    border-width: 2px
    border-color: main

.crazybtn:hover
    background: accent2

img
    height: 2.6789em
    float: right

span
    float:left
    padding-left: .7em
    padding-top: .7em

</style>
