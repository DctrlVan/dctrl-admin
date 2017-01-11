<template lang='jade'>

.tags.row
    h6 categories:
        tag(v-for='tag in x', :x='tag')


</template>
<script> // ES6
import Tag from './Tag'
export default {
    props: ['x'],
    components:{
        Tag,
    }
}

</script>

<style lang='stylus' scoped>

.tags
    margin-top:2em

h6
    font-weight:bolder

</style>
