<template lang='jade'>

#deactivatemember
    shared-title(title='Deactivate Member')
        form-box
            label address
            input(v-model='address' type='text')
            button(@click.prevent='deactivateMember') Farewell


</template>

<script>
import request from 'superagent'
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

function deactivateMember(address){
    console.log(address)
    request
        .post('/member_deactivate')
        .send({ address })
        .end((err,res)=>{
            console.log({err,res})
        })
}

export default {
    components: {
        SharedTitle, FormBox
    },
    methods: {
        deactivateMember(){
            deactivateMember(this.address)
        }
    },
    data(){
        return {
            address: "test"
        }
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'

</style>
