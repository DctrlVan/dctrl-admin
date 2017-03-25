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

h2

		color:accent1
		margin:0
		padding-top:50px
		font-family:sans-serif
		font-weight:100
		margin-bottom:1em

</style>
