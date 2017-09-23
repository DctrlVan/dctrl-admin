<template lang='pug'>

ul.navigation
    router-link(to='/MEMBERS') Members
    router-link(to='/BOUNTIES') Bounties
    router-link(to='/RESOURCES') Resources
    router-link(to='/BUYS') Commons Buys
    //- router-link(to='/tasks') Tasks

</template>

<script>
export default {
    methods:{
        match(route){
            let matched = route == this.$router.currentRoute.path
            console.log({route, matched})
            return {
                selected: matched
            }
        }
    },
    data(){
        console.log("current route 2412312@#@#", this.$router.currentRoute.path)
        return {
            current: this.$router.currentRoute.path
        }
    },
    computed: {
        supplies(){
            return this.$store.state.dctrl.supplies.bitpepsi
        },
        low(){
            return this.supplies < 100
        },
        cash(){
            return this.$store.state.dctrl.cash
        },
    }
}
</script>

<style lang="stylus" scoped>

@import '../styles/colours'

.navigation
    color: accent1

.setup, .lists, .cash
    padding:10px

.red
    color: red

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
