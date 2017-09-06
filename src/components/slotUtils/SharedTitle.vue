<template lang="jade">

div
    h2 {{ title }}
    slot

</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

div
    border-bottom-style: solid
    border-bottom-width: 2px
    border-color: accent2
    color: white
    padding-top: 3em
    background: accent4


</style>
