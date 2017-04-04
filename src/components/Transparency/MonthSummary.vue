<template lang='jade'>

.monthsummary
    shame-pie(:_id='x.address')
    p Active Member Count: 10

</template>

<script>

import ShamePie from './ShamePie'

export default {
    props: ['x'],
    components: { ShamePie }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

.monthsummary
    color: accent1

</style>
