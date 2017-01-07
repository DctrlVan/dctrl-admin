<template lang="jade">

modal(:visible='visible', :close='closeModal')
    h1 todo new bounty form


</template>

<script>
import Modal from '../generics/utils/Modal'

export default {
    computed: {
        visible(){
            return this.$store.state.bounties.isUserCreating
        }
    },
    methods:{
      closeModal(){
          this.$store.commit('setIsUserCreating', false)
      }
    },
    components: {
      Modal,
    }
}

</script>

<style lang="stylus"></style>
