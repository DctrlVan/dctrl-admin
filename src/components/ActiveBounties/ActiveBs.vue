<template lang='jade'>

tr
    td {{b.name}}
    td {{b.currentValue}}
    td {{b.monthValue}}
</template>


<script>

export default {
    props: ['b'],
    components: { },
}

</script>

<style lang="stylus">

// TODO: style .inactive / or .active

</style>
