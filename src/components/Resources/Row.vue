<template lang='pug'>

.resources
  h3 {{ r.name }}
      span(v-if='r.stock > 0') - {{ r.stock }}
  .row
      .six.columns
          label recently used by:
          current(v-for='memberId in currentMembers', :memberId='memberId')
      .six.columns
          router-link(:to='"/invoice_create/" + r.resourceId')
              button purchase
          router-link(:to='"/resource_stock/" + r.resourceId')
              button.refill refill

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
          return this.r.current.map(ev => ev.memberId)
      },
  },
}

</script>

<style lang="stylus" scoped>

@import '../../styles/button'
@import '../../styles/grid'
@import '../../styles/colours'

.resources
    width: 100%

h3
    text-align:center

.refill
    color: main
    background: green
    border-color: green

</style>
