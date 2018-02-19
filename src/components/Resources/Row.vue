<template lang='pug'>

tr
    td
        current(v-for='memberId in currentMembers', :memberId='memberId')
    td
        router-link(:to='"/resource_stock/" + r.resourceId')
            button.btn stock
    td
        label current stock: {{ r.stock }}

</template>

<script>

import Current from './Current'

export default {
  props: ['r'],
  components: {Current},
  methods:{
      toResourceLocation(){
          this.$router.push( '/RESOURCE/' + this.r.resourceId)
      },
  },
  computed: {
      currentMembers(){
          return this.r.current
      },
  },
}

</script>

<style lang="stylus" scoped>

@import '../../styles/button'
@import '../../styles/colours'

tr
    width: 100%


</style>
