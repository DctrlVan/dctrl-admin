<template lang='jade'>

.navigation
    router-link(to='MEMBERS')
        li MEMBERS
    router-link(to='ABOUT')
        li ABOUT
    router-link(to='BOUNTIES')
        li BOUNTIES
    router-link(to='PROJECTS')
        li PROJECTS
    router-link(to='COMMITMENTS')
        li COMMITMENTS
    router-link(to='CALENDAR')
        li CALENDAR
    router-link(to='NEWS')
        li NEWS

</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>

@import '../styles/colours'
@import '../styles/framework'

li
    color: mainLight
    border-bottom: 1px solid black
    margin-bottom: 0;
    padding: 0.65rem 20px;
    list-style: none;
    display: inline-block;
    width: 60%;
    clear:both

.router-link-active
    font-weight: bolder
    background: mainLight
    color: mainDark // not working TODO

</style>
