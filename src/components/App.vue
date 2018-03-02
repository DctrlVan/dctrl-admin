<template lang='pug'>

#app
    // TODO add cool visuals- img#tronstuff(src='../assets/images/tronStuff.svg')
    .feed
        event-feed
    .mobile
        mobile-heading
            router-view
    main
      .side_bar
          main-menu
      .content
          router-view
    img(src='../assets/images/decent_logo_alpha_no_text.svg')


</template>

<script>

import io from 'socket.io-client'

import MainMenu from './MainMenu'
import MobileHeading from './MobileHeading'
import EventFeed from './slotUtils/EventFeed'

export default {
    mounted(){
        this.$store.dispatch('loadCurrent')

        let token = window.localStorage.token
        let session = window.localStorage.session

        if (token && session){
            let auth = {token, session}
            console.log('setting auth', auth)
            this.$store.commit('setAuth', auth)
        }

        const socket = io()
        socket.on('connect', ()=> {
            console.log("socket connected")
            console.log("authenticating with", {
              session: this.$store.state.loader.session,
              token: this.$store.state.loader.token
            })

            socket.emit('authentication', {
              session: this.$store.state.loader.session,
              token: this.$store.state.loader.token
            })

            socket.on('authenticated', ()=> {
                console.log('socket authenticated')
                // use the socket as usual

                this.$store.dispatch('loadCurrent')


                socket.on('eventstream', ev => {
                    console.log('eventstream:' , ev)
                    this.$store.commit('applyEvent', ev)
                    this.$store.dispatch('displayEvent', ev)
                })
            });
        });
    },
    components: {
        MainMenu, MobileHeading, EventFeed
    },
}


</script>

<style lang="stylus">

@import "../styles/normalize"
@import "../styles/breakpoints"
@import "../styles/framework"
@import "../styles/colours"

main
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    color: accent1
    font-family:font

.side_bar, .content
    display: flex;

.content
    flex-grow: 4;
    overflow-y:scroll
    padding:0 5rem

.side_bar {
    flex-basis: 10rem;
    flex-shrink: 0;
    flex-grow: 0;
}

@media (max-width: breakpoint)
    main
        display: none

@media (min-width: breakpoint)
    .mobile
        display: none

</style>
