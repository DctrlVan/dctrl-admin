<template lang='jade'>

.tags.row
    h6 tags:
    li.tag.three.columns(v-for='tag in x') {{tag}}


</template>
<script> // ES6

export default {
    props: ['x'],

}

</script>
<style lang='stylus' scoped>

h6
    font-weight:bolder

</style>
