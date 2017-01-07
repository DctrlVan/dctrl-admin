<template lang="jade">

div.sources(v-show='!!content.length')
    h6 SOURCES
    div.sources__container(v-for='(link, index) in content')
      p.source(
        target="_blank",
          :style='style'
          ) [{{index + 1}}] {{link}}

</template>

<script>
export default {
  props:['content', 'color'],
  computed: {
    style(){
      return {
        color: this.color
      }
    }
  }
}

</script>

<style lang="stylus" scoped>
  @import "../../styles/main"

  .source
    font-size:.7em

  .sources__container
    line-height: 1.6rem;

</style>
