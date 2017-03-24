<template lang='jade'>

#home
    .offset-by-two.nine.columns
        h1
            label community commons
    .row
        .four.columns
            p(@mouseover='switchShow("collaborative")', :class='{selected:show==="collaborative"}') 1. collaborative
            p(@mouseover='switchShow("transparent")', :class='{selected:show==="transparent"}') 2. transparent
            p(@mouseover='switchShow("rational")', :class='{selected:show==="rational"}') 3. rational
            p(@mouseover='switchShow("enabling")', :class='{selected:show==="enabling"}') 4. enabling
        .eight.columns
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
                  return 'We are building software and systems to manage an equal-stakes community commons. We provide tools for members to participate directly, voting on the allocation of shared resources and pursuing projects in a "do-ocracy" style (If you have an idea, and it doesn\'t conflict with the basic values of the group, go for it.)'
              case 'collaborative':
                  return 'We want to provide a place to meet with like minded people, and work on impacting our community. The topics we focus on can be diverse -- technology, politics, education, fun. People come together from all of these interests, and move quickly from excited conversation to dedicated action.'
              case 'enabling':
                  return 'We will provide tools for community members to learn for free: software, hardware, science, social theory, and so on. A core fascination for many of our members is decentralization, and the possible benefits of decentralized technology across all of these sectors.'
              case 'rational':
                  return 'Together we can own things that would not make sense to own alone: high quality tools, virtual reality equipment, a well-equipped recording studio, and other voted-in expenditures. Similarly, the autonomous projects that take place in the space succeed or fail based on community participation and follow-up.  '

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
    color:main
    background:accent1

.selected
    color:accent3
    text-transform:uppercase
    
img
    height:111px

h1
    color:accent1
    text-align:right
    margin:0
    padding:0

p
    padding:1em
    box-shadow: 1px 2px black

</style>
