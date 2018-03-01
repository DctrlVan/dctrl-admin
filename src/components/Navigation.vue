<template lang='pug'>

ul.navigation
    router-link(v-if='isLoggedIn', to='/mypage') My Page
    router-link(to='/MEMBERS') Members
    router-link(to='/RESOURCES') Resources
    router-link(to='/TASKS') Tasks
    .admin(v-if='isAdmin')
        label admin
        router-link(to='/MANAGE') Manage Cash
        router-link(to='/HISTORY') View All Events

</template>

<script>
export default {
    name: 'navigation',
    computed: {
        memberId(){
            return this.$store.getters.isAdmin
        },
        memberId(){
            return this.$store.getters.memberId
        },
        isLoggedIn(){
            return this.$store.getters.isLoggedIn
        },
        isAdmin(){
            return this.$store.getters.isLoggedIn
        },
    }
}
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

.admin
  color: main
  background: green
  border-radius: .6em
  padding: .5em
  a
    color: main
    border-color: main

li
    color: accent2

</style>
