<template lang='pug'>

ul.navigation
    router-link(to='/MEMBERS') Members
    router-link(to='/RESOURCES') Resources
    router-link(to='/MANAGE') Manage
    router-link(to='/TASKS') Tasks

</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>

@import '../styles/colours'

a
  text-decoration: none;
  color: accent1
  padding: 10px 20px;
  margin-bottom: 0;
  border-style:solid
  border-width:3px
  border-radius: 30px
  margin-left: 3em
  border-color:accent1
  list-style: none;
  font-family:sans-serif
  display: block;
  margin-bottom:.54321em

a:hover, .router-link-active
  background-color: accent4
  border-radius:30px
  color:main

</style>
