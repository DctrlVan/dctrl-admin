<template lang='jade'>

#shop
    shared-title(title='Shop')

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'

export default {
    components:{
        SharedTitle
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

p
    font-size:1em
    color:accent2

</style>
