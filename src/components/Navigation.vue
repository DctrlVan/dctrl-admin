<template lang='jade'>

ul.navigation
  li
    router-link(to='/ETHOS') Ethos
  li
    router-link(to='/PROJECTS') Projects
  li
    router-link(to='/BOUNTIES') Bounties

</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>

@import '../styles/colours'

ul
    list-style: none;

li
    margin-bottom: 0;
    border-bottom-style:solid
    border-width:1px
    border-color:accent1
    list-style: none;
    font-family:sans-serif
    display: block;
    :hover
        background:accent3

a
  text-decoration: none;
  color: #fff;
  display: block
  padding: 10px 20px;



</style>
