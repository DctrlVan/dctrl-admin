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
    border-width: 0px


h2
		color:accent1
		margin:0
		padding-top:50px
		font-family: 'Open Sans', light, sans-serif;
		font-weight:100
		margin-bottom:.5em


</style>
