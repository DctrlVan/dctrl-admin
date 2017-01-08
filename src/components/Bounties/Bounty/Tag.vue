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
    color:white
    background:green
    padding:.2em
    border-color:blue
    border-style:solid
    margin:.2em

</style>
