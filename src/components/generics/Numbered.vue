<template lang="jade">

.variable
  table
    tbody
      tr(v-for='(x, index) in content')
        td.number {{ index + 1 }}
        td {{ x }}

</template>

<script>
export default {
    props: ['content']
}
</script>

<style lang="stylus" scoped>
  @import "../../styles/main"

  .variable
    text-align:left
    padding-left:21%
    padding-right:5%

  .number
    font-size: 2em

</style>
