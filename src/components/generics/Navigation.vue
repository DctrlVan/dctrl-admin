<template lang='jade'>

.navigation
  .list--clean
    router-link(to='MEMBERS')
      li MEMBERS
    router-link(to='BOUNTIES')
      li BOUNTIES
    router-link(to='PROJECTS')
      li PROJECTS
    router-link(to='COMMITMENTS')
      li COMMITMENTS
    router-link(to='CALENDAR')
      li CALENDAR

</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import "../../styles/main"



.router-link-active
  font-weight: bolder;

.navigation__link {
    margin-right: 15px;
    margin-left: 15px;
}



li {
    border-bottom: 1px solid black
    color:#dbd8d8
    margin-bottom: 0;
    padding: 0.65rem 20px;
    list-style: none;
    display: inline-block;
    width: 60%;
    clear:both
}

a {
    text-decoration: none;
}

.navigation--offcanvas {
    li {
        padding: 0.65rem 20px;
    }
}
.navigation--offcanvas.is-open {
    display: block;
}
.navigation--sidebar {
    display: none;
}

.navigation--header
  display:block

@media (min-width: breakpoint) {
    .navigation--sidebar {
        display: block;
    }

    .navigation--header{
      display:none
    }

    .navigation__link {
        margin-right: 0;
        margin-left: 0;
    }

    li {
        padding-left: 0;
        padding-right: 0;
    }
}

</style>
