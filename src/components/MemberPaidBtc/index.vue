<template lang='jade'>

#newmember
    shared-title(:title='calcTitle')
    div(v-html='imgTag')

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'
import qrcode from 'qrcode-generator'


export default {
    mounted(){
        let address = this.$router.currentRoute.path.split('/')[2]
        if (address){
            this.member.address = address
        }
    },
    computed: {
        imgTag(){
            let typeNumber = 4;
            let errorCorrectionLevel = 'L';
            let qr = qrcode(typeNumber, errorCorrectionLevel);
            let data = 'bitcoin:' + this.member.address
            qr.addData(data)
            qr.make()
            let cellsize = 10
            let margin = 10
            return qr.createImgTag(cellsize, margin)
        },
        calcTitle(){
            let name = 'nobodies'
            this.$store.state.brain.members.forEach( member => {
                if (member.address === this.member.address){
                    name = member.name
                }
            })
            return name + "'s address: "
        }
    },
    data(){
        return {
            member: {
                address: '',
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
