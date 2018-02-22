<template lang='pug'>

#stocksupplies
    shared-title(title='stock bitpepsi')
    form-box(btntxt="Loaded"  event='resource-stocked' v-bind:data='info')
        label Amount stocked:
        input(v-model='info.amount' type='text')
        label reciept value
        input(v-model='info.paid' type='text')
        label notes
        input(v-model='info.notes' type='text')
        label Member Fob (Tap it!)
        input(v-model='info.fob' type='text')

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

// TODO: supplies stocked affect member...
export default {
    mounted(){
        let resourceId = this.$router.currentRoute.path.split('/')[2]
        console.log('setting resourceId', {resourceId})
        this.info.resourceId = resourceId
    },
    data(){
        return {
            info: {
                resourceId:'',
                fob: '',
                paid: '',
                amount:'',
                notes: '',
            }
        }
    },

    components:{
        SharedTitle, FormBox
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'
@import '../../styles/button'

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
