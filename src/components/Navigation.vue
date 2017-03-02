<template lang='jade'>

.navigation
    router-link(to='/ABOUT')
        li ABOUT
    router-link(to='/PROJECTS')
        li PROJECTS
    router-link(to='/MEMBERS')
        li MEMBERS
    router-link(to='/BOUNTIES')
        li BOUNTIES
    router-link(to='/COMMITMENTS')
        li COMMITMENTS
    router-link(to='/CALENDAR')
        li CALENDAR
    router-link(to='/SHOP')
        li SHOP
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>

@import '../styles/colours'

li
    color:accent3
    border-bottom: 1px solid accent1
    border-top: 1px solid accent1
    margin-bottom: 0;
    padding: 0.65rem 20px;
    list-style: none;
    display: inline-block;
    width: 60%;
    clear:both
    background:main

.router-link-active
    font-weight: bolder
    background: mainLight

</style>
