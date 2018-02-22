<template lang='pug'>

span
    img(src='../../assets/images/active15.svg')
    span {{ name }}

</template>

<script>

export default {
  props: ['memberId'],
  computed:{
    name(){
        let memberId = this.memberId
        let name = '...loading'
        this.$store.state.members.forEach(member => {
            if (member.memberId == memberId){
                name = member.name
            }
        })
        return name
    }
  }
}

</script>

<style lang="stylus" scoped>
@import '../../styles/colours'

img
    height: 1.7em

span
    font-size: 1em

a
    color: accent2
    text-decoration: none

</style>
