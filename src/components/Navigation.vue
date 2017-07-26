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
    li
      router-link(to='/ACTIVE_BOUNTIES') Bounties
  .cash
    label todo
    li
      router-link(to='/STOCK_SUPPLIES') Stock Supplies
          span
              span.red(v-if='low')  ( {{supplies}} )
              span(v-else) ( {{supplies}} )
    li
      router-link(to='/EDIT_BOUNTY') Edit Bounty

</template>

<script>
export default {
    data(){
        return {
            // todo: time to vuex
            supplies: 1
        }
    },
    computed: {
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
        background:accent1

a
  text-decoration: none;
  color: #fff;
  display: block
  padding: 10px 20px;



</style>
