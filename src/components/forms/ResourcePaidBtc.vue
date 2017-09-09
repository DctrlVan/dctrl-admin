<template lang='jade'>

#newresource
    shared-title(:title='calcTitle')
    div(v-html='imgTag')

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'
import qrcode from 'qrcode-generator'


export default {
    mounted(){
        let resourceId = this.$router.currentRoute.path.split('/')[2]
        if (resourceId){
            this.resource.resourceId = resourceId
        }
    },
    computed: {
        imgTag(){
            let typeNumber = 4;
            let errorCorrectionLevel = 'L';
            let qr = qrcode(typeNumber, errorCorrectionLevel);
            let address = 'x'
            this.$store.state.resources.forEach( resource => {
                if (resource['resource-id'] === this.resource.resourceId){
                    address = resource.address
                }
            })
            let data = 'bitcoin:' + address
            qr.addData(data)
            qr.make()
            let cellsize = 10
            let margin = 10
            return qr.createImgTag(cellsize, margin)
        },

        calcTitle(){
            let name = 'nobodies'
            this.$store.state.resources.forEach( resource => {
                if (resource['resource-id'] === this.resource.resourceId){
                    name = resource.name
                }
            })
            return name + "'s address: "
        }
    },
    data(){
        return {
            resource: {
                resourceId: '',
            }
        }
    },
    components: {
        SharedTitle
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'


</style>
