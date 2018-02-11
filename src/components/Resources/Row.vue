<template lang='pug'>

tr
    td
        current(v-for='memberId in currentMembers', :memberId='memberId')
    td
        label {{r.resourceId}}
    td {{ r.charged }}


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

</style>
