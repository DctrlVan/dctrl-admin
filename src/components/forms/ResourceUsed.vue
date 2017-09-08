<template lang='jade'>

#newresource
    shared-title(:title='calcTitle')
    form-box(btntxt="Cash Placed in Safe"  endpoint='/resource_pay' v-bind:data='resource')
        label amount
        input(autofocus="autofocus" v-model='resource.paid' type='text')
        label notes
        input(v-model='resource.notes' type='text')

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    mounted(){
        let resourceId = this.$router.currentRoute.path.split('/')[2]
        if (resourceId){
          this.resource.resourceId = resourceId
        }
    },
    data(){
        return {
            resource: {
                resourceId: '',
                used: '',
                itWorks: true,
                notes: ''
            }
        }
    },
    components: {
        SharedTitle, FormBox
    },
    computed: {
        calcTitle(){
            let name = 'nobodies'
            this.$store.state.resources.forEach( resource => {
                if (resource.resourceId === this.resource.resourceId){
                    name = resource.name
                }
            })
            return name + "'s was used last by  " //last member to use the resource
        }
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'


</style>
