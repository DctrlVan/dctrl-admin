<template lang="jade">


Modal(v-bind:visible='visible', v-bind:close='closeModal')
    h1 Welcome to the movement.
    p It takes every one of us to step up to create a better BC. Thank you for taking the first step.
    p You will receive an email from us shortly confirming your subscription.
    p In the meantime, tell us how we can #ReimaginePolitics and #ReimagineBC at
        a(href="https://facebook.com/imaginexbc", target="_blank") Facebook
        span  and on Twitter
        a(href="https://twitter.com/imaginexbc", target="_blank") @imaginexbc
        span .
    button.btn--full(@click.prevent='closeModal') OK

</template>

<script>
import Modal from '../utils/Modal.vue'

export default {
  components: {
    Modal
  },
  computed: {
    visible() {
      return this.$store.state.director.thankYou
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch('TOGGLE_THANKYOU')
    },
  },
}
</script>

<style lang='stylus' scoped>

@import "../../styles/main"

</style>
