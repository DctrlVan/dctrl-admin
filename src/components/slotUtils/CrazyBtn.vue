<template lang='pug'>

router-link.crazybtn(:to='to')
    span + {{text}}
    img.spin(src='../../assets/images/active10.svg')

</template>


<script>

export default {
    props: ['to', 'text']
}


</script>

<style lang='stylus' scoped>

@import '../../styles/colours'
@import '../../styles/spinners'


.crazybtn
    float: right
    top:50px
    right:100px
    background: main
    border-radius: 25px
    width: 222px
    color: accent1
    cursor: pointer
    font-size: 1.4em
    text-decoration: none
    border-style:solid
    border-width:3px
    border-radius: 30px
    margin-top: .5em
    margin-right: 0.3em
    padding-top: .123em
    padding-bottom: .123em

.crazybtn:hover
    background: accent2
    color: main

img
    height: 2.6789em
    float: right


span
    float:left
    padding-left: .7em
    padding-top: .7em

</style>
