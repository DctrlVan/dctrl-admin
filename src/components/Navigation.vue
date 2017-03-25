<template lang='jade'>

ul.navigation
  li
    router-link(to='/ABOUT') ABOUT
  li
    router-link(to='/PROJECTS') PROJECTS
  li
    router-link(to='/MEMBERS') MEMBERS
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
    list-style: none;
    font-family:sans-serif
    display: block;
a
  text-decoration: none;
  color: #fff;
  display: block
  width: inherit
  padding: 1rem 2rem;



</style>
