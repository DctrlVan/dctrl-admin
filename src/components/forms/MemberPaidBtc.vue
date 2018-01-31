<template lang='pug'>

#newmember
    shared-title(:title='calcTitle')
    label input amount
    select
        option BTC
        option CAD
    div(v-html='imgTag')

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'
import qrcode from 'qrcode-generator'

export default {
    mounted(){
        let memberId = this.$router.currentRoute.path.split('/')[2]
        if (memberId){
            this.member.memberId = memberId
        }
    },
    computed: {
        imgTag(){
            let typeNumber = 4;
            let errorCorrectionLevel = 'L';
            let qr = qrcode(typeNumber, errorCorrectionLevel);
            let address = 'x'
            this.$store.state.members.forEach( member => {
                if (member.memberId === this.member.memberId){
                    address = member.address
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
            this.$store.state.members.forEach( member => {
                if (member.memberId === this.member.memberId){
                    name = member.name
                }
            })
            return name + "'s address: "
        }
    },
    data(){
        return {
            member: {
                memberId: '',
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
