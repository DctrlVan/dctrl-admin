<template>

  <div>
      CLAIMED BY {{ x }}
  </div>

</template>

<script>

export default {
    props:['x']
}

</script>


<style lang="stylus" scoped>

div
    font-size:1.5em
    border-color:red
    color:red
    border-style:dashed
    border-width:4px
    border-radius:5%
    font-family:times
    text-align:center

</style>
