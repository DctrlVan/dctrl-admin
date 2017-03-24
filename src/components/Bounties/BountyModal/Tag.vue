<template>

<div class='rot'>
        {{x}}
</div>

</template>

<script>

export default {
  props:['x']
}

</script>

<style lang='stylus' scoped >

div
    background-color:white
    color:black
    padding:.2em
    border-style:solid
    border-width:.2px
    margin:.2em

.rot
    transform:rotate(1deg)

</style>
