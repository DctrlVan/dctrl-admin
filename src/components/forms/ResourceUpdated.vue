<template lang='pug'>

#newresource
    shared-title(title='Resource Updated')
    form-box(btntxt="Update Resource"  endpoint='/resource_updated' v-bind:data='resource')
        label address
        input(v-model='resource.address' type='text')
        label amount
        input(autofocus="autofocus" v-model='resource.amount' type='text')
        label notes
        input(v-model='resource.notes' type='text')

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    mounted(){
        let address = this.$router.currentRoute.path.split('/')[2]
        if (address){
          this.resource.address = address
        }
    },
    data(){
        return {
            resource: {
                address: '',
                amount: '',
                notes: ''
            }
        }
    },
    components: {
        SharedTitle, FormBox
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'


</style>
