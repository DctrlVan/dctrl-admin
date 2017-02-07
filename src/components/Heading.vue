<template lang="jade">

#heading.container
    a(class="hamburger", href="#", @click.prevent='toggleHeaderNav')
        img(src='../assets/images/hamburger.svg')
    navigation(v-if="showHeaderNav").navigation--header

</template>

<script>
import Navigation from './Navigation'

export default {
    components: { Navigation },
    props: ['content'],
    data(){
      return {
        showHeaderNav: false,
      }
    },
    methods:{
      toggleHeaderNav(){
        this.showHeaderNav = !this.showHeaderNav
      },
    },
}
</script>

<style lang="stylus" scoped>
@import "../styles/breakpoints"

.hamburger
    position:absolute
    right:0

img
    height:250px
    cursor:pointer
    position: fixed;
    left: 15px;

.header-container
    border-bottom: 1px solid #E0E1DC;
    padding: 0;
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;

.header-container__block {
    padding-left: 20px;
    padding-right: 20px;
}

.container--header {
    padding-left: 0;
    padding-right: 0;
}

.navigation--header {
  display: block;
}

.heading__text {
    margin-top: 5rem;
    margin-bottom: 4rem;
}

@media (min-width: breakpoint) {
    button, .navigation--header{
      display:none
    }


    .header-container {
        border-bottom: 0;
        padding: 0;
        margin-bottom: 7rem;
        display: block;
    }

    .header-container__block {
        padding-left: 0;
        padding-right: 0;
    }

    .hamburger {
        display: none;
    }

    .container--header {
        padding-left: 20px;
        padding-right: 20px;
    }
}
</style>
