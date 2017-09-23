<template lang='pug'>

#newresource
    shared-title(:title='calcTitle')
    form-box(btntxt="Register Use"  endpoint='/resource_use' v-bind:data='resource')
        label Tap Fob!
        input(autofocus="autofocus" v-model='resource.fob' type='text')

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
                fob: ''
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
