<template lang="jade">
#who
  h6 WHO WE ARE
  p Imagine X is a political platform. We are a group of passionate citizens starting a political movement to reimagine politics and reimagine BC. Our backgrounds range from economics, philosophy, political science and arts to technology, medicine, business and education. We are united by our stand for a good government with principles and policies that meet our core values. And no, we are not affiliated with the BC Liberals, NDPs, Greens, any other existing party or interest group. We are 100% self-funded and self-motivated. We simply want a better government for an even better BC - just like you.
  a(href="https://www.facebook.com/imaginexbc", target="_blank") 
    i.fa.fa-facebook-official.fa-lg
  span &nbsp&nbsp
  a(href="https://www.twitter.com/imaginexbc", target="_blank")
    i.fa.fa-twitter.fa-lg
  img.image--max(src='../../../static/images/collage.png')
</template>

<script>
export default {
  computed: {
    imaginexLocation: function(){
      if (this.$store.state.director.mode==="attack"){
        return '../../../static/images/imaginexWhite.svg'
      }
      return '../../../static/images/imaginex.svg'
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import "../../styles/main"
  .image--max {
    width: 100%;
    margin-top: 3rem;
  }

</style>
