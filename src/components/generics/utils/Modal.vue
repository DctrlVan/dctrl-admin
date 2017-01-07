<template lang="jade">

.modal(v-show='visible', @click='close')
  .content(v-bind:class='contentClass', @click.stop='')
      a(href="#" class="modal__close-btn" @click.prevent='close') CLOSE
      slot

</template>

<script>
export default {
  props: ['visible', 'close', 'sm'],
  computed: {
    contentClass(){
      if (this.sm){
        return {
          "content--sm": true
        }
      }
      return {}
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import "../../../styles/main";

</style>
