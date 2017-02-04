<template>

<span class="span">
    {{x}}
</span>

</template>

<script>

export default {
  props:['x']
}

</script>

<style lang='stylus' scoped >

.span
    background-color:white
    color:black
    padding:.2em
    border-style:solid
    border-width:.2px
    margin:.2em

</style>
