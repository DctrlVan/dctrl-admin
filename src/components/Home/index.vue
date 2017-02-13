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
        .description {{ description }}


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
  computed: {
      description(){
          switch (this.show){
              case 'transparent':
                  return 'We strive to run a community commons with a flat hierarchy. We provide tools for members to audit our full financials, and open voting for managing our commons wallet.'
              case 'collaborative':
                  return 'We want to provide a place to meet with like minded people, and work on project. Political, anarchist, or anywhere in between.'
              case 'enabling':
                  return 'We will provide tools to learn software, hardware and the environment to turn ideas into action. How? '

          }
      }
  }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

#home
    padding-top:30px
    color:accent2

.description
    padding:2em
    font-size:1.4em

.selected
    color:main
    font-size:1.5em
    text-transform:uppercase
    text-decoration:underline
    p
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
