<template lang='jade'>

#home
    .offset-by-two.nine.columns
        h1
            label community commons
    .row
        .offset-by-four.six.columns(@mouseover='switchShow("collaborative")', :class='{selected:show==="collaborative"}')
            p.c 1. collaborative
        .offset-by-four.six.columns(@mouseover='switchShow("transparent")', :class='{selected:show==="transparent"}')
            p.c 2. transparent
        .offset-by-four.six.columns(@mouseover='switchShow("rational")', :class='{selected:show==="rational"}')
            p.c 3. rational
        .offset-by-four.six.columns(@mouseover='switchShow("enabling")', :class='{selected:show==="enabling"}')
            p.c 4. enabling
    .row
        .description {{ description }}


</template>

<script>

export default {
  data(){
      return {
          show: 'collaborative'
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
                  return 'We want software to manage a community commons. We provide tools for members to participate, and open voting for managing our commons wallet.'
              case 'collaborative':
                  return 'We want to provide a place to meet with like minded people, and work on impacting our community. Political, anarchist, or anywhere in between.'
              case 'enabling':
                  return 'We will provide tools to learn software, hardware and the environment to turn ideas into action. How? '
              case 'rational':
                  return 'Together we can own what would not make sense to own alone, i.e. tools, VR, recording studio, etc...  '

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

.row
    div
        clear:both

.description
    padding:2em
    font-size:1.4em
    color:main
    background:accent1

.selected
    color:main
    text-transform:uppercase
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

p
    padding:1em
    box-shadow: 1px 2px black

</style>
