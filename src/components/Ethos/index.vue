<template lang='jade'>
#ethos
    shared-title(title="Ethos")
        .blurb From a socio-economic perspective, we view Bitcoin and Blockchain Technology as one of the most significant innovations in human history. It will catalyze a paradigm shift of how we fundamentally view politics, law, trade and currency. In parallel with the rise of Blockchain Technology, we acknowledge the imperative for a sustainable future and the need for humanized economics where community and the conditions for life are priority. We are not just another shared workspace, we are truly a niche community of likeminded individuals, friends, and peers. Our drive is to steer P2P and Blockchain Technology in a positive way that empowers the individual, and improves society – locally and globally. Our community is focused on creating culture and commerce with respect to…
        .row
            .four.columns
                .fa.fa-arrows
                p Decentralization
            .four.columns
                .fa.fa-arrows
            .four.columbs
                .fa.fa-arrows
        .row
            .four.columns
                .fa.fa-arrows
            .four.columns
                .fa.fa-arrows
            .four.columbs
                .fa.fa-arrows

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'

export default {
  components:{
        SharedTitle
  },
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
              case 'collaborative':
                  return 'We want to build a community through technology, politics, education, fun... People can come together from all of these interests, and move quickly from excited conversation to dedicated action.'
              case 'transparent':
                  return 'We are building software and systems to manage an equal-stakes community commons. We provide tools for members to participate directly, voting on the allocation of shared resources and pursuing projects in a "do-ocracy" style'
              case 'enabling':
                  return 'We will provide tools for community members to learn for free: software, hardware, science, social theory, and more. A core fascination for many of our members is decentralization, and the possible benefits of decentralized technology across all of these sectors.'
              case 'rational':
                  return 'Together we can own things that would not make sense to own alone: high quality tools, virtual reality equipment, a well-equipped recording studio, and other voted-in expenditures. Similarly, the autonomous projects that take place in the space succeed or fail based on community participation and follow-up.'
          }
      }
  }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

#ethos
    color:accent1
    text-align:center
.fa
    font-size:60px
    padding:1em
p
    font-size:25px

.blurb
    font-size:15px
    color:accent3

</style>
