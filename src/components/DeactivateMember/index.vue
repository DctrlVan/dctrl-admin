<template lang='jade'>

#deactivatemember
    shared-title(title='Deactivate Member')
        form
            label address
            input(type='text')


</template>

<script>
import request from 'superagent'
import SharedTitle from '../slotUtils/SharedTitle'

function deactivate_member(address){
  
}

export default {
    components: {
        SharedTitle
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'

</style>
