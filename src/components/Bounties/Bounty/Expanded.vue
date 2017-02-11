<template lang='jade'>

.expanded
    p {{ x.description }}
        claim-btn(:x='x')

</template>

<script>

import ClaimBtn from './ClaimBtn'

export default {
  props: ['x'],
  components: { ClaimBtn }
}

</script>

<style lang='stylus' scoped>

@import '../../../styles/colours'

p
    padding-right:4em
    padding-left:4em
    padding-top:1em
    background: main
    color:accent2
    border-style:solid
    border-width:5px
    border-color:accent2
    margin-top:1em


</style>
