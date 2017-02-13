<template lang='jade'>

.expanded
    p {{ x.description }}
        claim-btn(:x='x')
        tag(v-for='y in x.tags', :x='y')

</template>

<script>

import ClaimBtn from './ClaimBtn'
import Tag from './Tag'

export default {
  props: ['x'],
  components: { ClaimBtn, Tag }
}

</script>

<style lang='stylus' scoped>

@import '../../../styles/colours'

p
    padding:1em 2em
    background: main
    color:accent2
    border-left-style:solid
    border-width:5px
    border-color:accent2
    margin-top:1em
    margin-left:2em


</style>
