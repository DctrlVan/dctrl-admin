<template lang='jade'>

ul.navigation
  .setup
    label setup
    li
      router-link(to='/NEW_MEMBER') Create Member
    li
      router-link(to='/CREATE_BOUNTY') Create Bounty
  .lists
    label manage
    li
      router-link(to='/MEMBER_LIST') Members
    li()
      router-link(to='/ACTIVE_BOUNTIES') Bounties
    li
        router-link(to='/STOCK_SUPPLIES') Supplies
            span
                span.red(v-if='low')  ( {{supplies}} )
                span(v-else) ( {{supplies}} )
    label Cash
    li
        router-link(to='/CASH_EXPENSE') Expend
    li
        router-link(to='/cash_received') Receive


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
            return this.$store.state.brain.dctrl.supplies.bitpepsi
        },
        low(){
            return this.supplies < 100
        }
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

.router-link-active
    box-shadow:3px 3px 3px accent1
    border-radius: 30%
    margin-bottom: 0;
    border-bottom-style:solid
    border-width:1px
    border-color:accent1
    list-style: none;
    font-family:sans-serif
    display: block;
    box-shadow:4px 4px 4px accent2
    font-size: 1.2em
    color:accent2


li
    box-shadow:3px 3px 3px accent1
    border-radius: 30%
    margin-bottom: 0;
    border-bottom-style:solid
    border-width:1px
    border-color:accent1
    list-style: none;
    font-family:sans-serif
    display: block;

li:hover
    box-shadow:4px 4px 4px accent2

.selected
    box-shadow:4px 4px 4px accent2
    color:accent2
    font-size: 1.2em

a
  text-decoration: none;
  color: #fff;
  display: block
  padding: 10px 20px;



</style>
