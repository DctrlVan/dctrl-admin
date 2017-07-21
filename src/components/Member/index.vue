<template lang='jade'>

#home
    shared-title(title='Member: ')
    p todo summary {{address}}
    li(v-for='x in listOfMemberChargedActions') Charge: {{x}}
    li(v-for='y in listOfMemberPaidActions') Credit: {{ y}}

</template>

<script>
import request from 'superagent'
import SharedTitle from '../slotUtils/SharedTitle'

export default {
    data(){
        return {
            address: '',
            listOfMemberChargedActions:[],
            listOfMemberPaidActions: []
        }
    },
    computed: {
        totalCharged(){
            return 'todo'
        }
    },
    components:{
        SharedTitle
    },
    mounted(){
        let component = this
        console.log("this.$router.currentRoute.path:", this.$router.currentRoute.path)
        let address = this.$router.currentRoute.path.split('/')[2]
        console.log({address})
        this.address = address
        let reqLoc = '/v1/member/' + address
        console.log({reqLoc})
        request
            .get(reqLoc)
            .end((err, res)=> {
                if (err) {
                    this.address = "sorry error, abort,... panic!"
                }
                res.body.listOfMemberChargedActions.forEach( charge => {
                    component.listOfMemberChargedActions.push(charge)
                })
                res.body.listOfMemberPaidActions.forEach( paid => {
                    component.listOfMemberPaidActions.push(paid)
                })
            })
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

p
    font-size:1.3em
    color:white
    font-family: 'Open Sans', light, sans-serif;

a
    color: accent2

h3
    text-align: left
    color:accent1
    font-family: 'Open Sans', light, sans-serif;


</style>
