<template lang="pug">

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
    border-bottom-width: .4em
    border-color: accent2
    color: white
    padding-top: 3em
    background: accent4
    padding-left:3.4567em


</style>
