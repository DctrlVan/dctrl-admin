<template lang='jade'>

ul.navigation
  li
    router-link(to='/MEMBER_LIST') Member List
  li
    router-link(to='/NEW_MEMBER') New Member
  li
    router-link(to='/MEMBER_DEACTIVATE') Deactivate Member
  li
    router-link(to='/MEMBER_PAID') Member Paid
  li
    router-link(to='/MEMBER_CHARGED') Member Charged
  li
    router-link(to='/CASH_EXPENSE') Cash Expense
  li
    router-link(to='/CASH_RECEIVED') Cash Received
  li
    router-link(to='/bounty_list') Bounty List
  li
    router-link(to='/CREATE_BOUNTY') Create Bounty

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
