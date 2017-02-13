<template lang='jade'>

.commitment.row
    .six.columns
        p {{ x.description }}
    .six.columns
        li Commited by: {{ x.member }}
        li Commited Value: {{ x.amount }} bits
        li Due in: {{ Math.round( (x.deadline - Date.now()) / 1000 / 60 / 60 ) }} hours

</template>
<script> // ES6

export default {
    props: ['x'],
}

</script>
<style lang='stylus' scoped>
@import '../../styles/colours'

.commitment
    background:main
    color:accent1


</style>
