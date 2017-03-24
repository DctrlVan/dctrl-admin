<template lang='jade'>

.expanded
    p {{ x.description }}
    claim-btn(:x= 'x')

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
    background: accent1
    color:main
    padding:.777em
    border-left-style:solid
    border-width:1px
    border-color:accent1
    margin-top:1em
    margin-left:2em
    font-weight:bolder


</style>
