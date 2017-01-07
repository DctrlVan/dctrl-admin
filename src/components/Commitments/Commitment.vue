<template lang='jade'>

.commitment.row
    .six.columns
        h4 Commited by: {{ x.member }}
        h4 Commited Value: {{ x.amount }} bits
        h4 Due in: {{ Math.round( (x.deadline - Date.now()) / 1000 / 60 / 60 ) }} hours
        button I DID IT
        button MAYBE NEXT TIME
    .six.columns
        p {{ x.description }}

</template>
<script> // ES6

export default {
    props: ['x'],
}

</script>
<style lang='stylus' scoped>

h4
    font-weight:bolder
    font-size:1.3em
    color:brown

</style>
