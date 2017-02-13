<template lang='jade'>

#home
    .img
        img(v-show='show==="transparent"', src='../../assets/images/transparent.svg')
        img(v-show='show==="collaborative"', src='../../assets/images/collaborative.svg')
        img(v-show='show==="enabling"', src='../../assets/images/enabling.svg')
    h1 decentralized
    h1 commons
    .row
        .four.columns(@mouseover='switchShow("transparent")', :class='{selected:show==="transparent"}')
            p.l transparent
        .four.columns(@mouseover='switchShow("collaborative")', :class='{selected:show==="collaborative"}')
            p.c collaborative
        .four.columns(@mouseover='switchShow("enabling")', :class='{selected:show==="enabling"}')
            p.r enabling
    .row
        p {{ description }}


</template>

<script>

export default {
  data(){
      return {
          show: 'transparent'
      }
  },
  methods:{
      switchShow(nowShow){
          this.show = nowShow
      }
  },
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

#home
    text-transform:uppercase
    padding-top:30px
    color:accent2

.selected
    color:main
    font-size:1.5em
    background:accent1

.img
    position:fixed

img
    height:111px

.r
    text-align: right

.l
    text-align: left

.c
    text-align: center

h1
    color:accent1
    text-align:right
    margin:0
    padding:0



</style>
