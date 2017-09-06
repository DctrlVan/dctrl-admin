<template lang='jade'>

ul.navigation
    label Explore
    li
        router-link(to='/MEMBERS') Members
    li
        router-link(to='/BOUNTIES') Bounties
    li
        router-link(to='/resources') Resources
    label Manage $$ ({{cash}})
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

li:hover, .router-link-active
    border-bottom-style:solid
    border-width:1px
    border-color:accent2
    font-family:sans-serif
    color:accent2

label
    font-family:sans-serif
    font-weight: lighter
    margin-top: .5em
    background: accent4
    color: accent3
    padding: .1em
    padding-left:1em

li
    margin-bottom: 0;
    border-bottom-style:solid
    border-width:1px
    border-color:accent1
    list-style: none;
    font-family:sans-serif
    display: block;

a
  text-decoration: none;
  color: #fff;
  display: block
  padding: 10px 20px;



</style>
