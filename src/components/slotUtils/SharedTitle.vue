<template lang="pug">

div
    h3 {{ title }}
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
    width: 100%
    border-bottom-style: solid
    border-bottom-width: .4em
    border-color: accent2
    color: white
    padding-top: 3em
    background: accent4
    padding-left:3.4567em
    padding-top: 1.5em
    padding-bottom: 1.5em
    h3
        font-size: 2.2em
        margin:0


</style>
