<template lang='pug'>

#deactivatemember
    shared-title(title='Deactivate Member')
        form-box(btntxt="Farewell"  event='member-deactivated' v-bind:data='member')
            label address
            input(v-model='member.address' type='text')

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    components: {
        SharedTitle, FormBox
    },
    data(){
        return {
            member: {
                address: ""
            }
        }
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'

</style>
