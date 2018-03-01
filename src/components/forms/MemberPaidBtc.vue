<template lang='pug'>

.address
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
    computed: {
        imgTag(){
            console.log('computing imgTag?')
            let typeNumber = 10;
            let errorCorrectionLevel = 'L';
            let qr = qrcode(typeNumber, errorCorrectionLevel);
            let address = 'x'
            this.$store.state.members.forEach( member => {
                if (member.memberId === this.$store.getters.memberId){
                    address = member.address.slice()
                }
            })
            let data = 'bitcoin:' + address
            console.log('Trying to create address qr:', data)
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
