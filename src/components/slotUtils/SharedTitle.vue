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
		text-transform:uppercase
		background:mainDark
		color:accent2
		margin:0
		padding-top:50px
		font-family:monospace
		font-weight:100
		border-bottom-style:solid
		border-color:accent2
		border-width:1px
		margin-bottom:1em

</style>
