<template lang='jade'>

ul.navigation
  li
    router-link(to='/ETHOS') ETHOS
  li
    router-link(to='/ABOUT') ABOUT
  li
    router-link(to='/PROJECTS') PROJECTS
  li
    router-link(to='/TRANSPARENCY') TRANSPARENCY
  li
    router-link(to='/BOUNTIES') BOUNTIES
  li
    router-link(to='/COMMITMENTS') COMMITMENTS
  li
    router-link(to='/CALENDAR') CALENDAR
  li
    router-link(to='/SHOP') SHOP

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
