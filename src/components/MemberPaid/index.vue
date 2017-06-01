<template lang='jade'>

#newmember
    shared-title(title='Member Paid')
        form
            label address
            input(v-model='member.address' type='text')
            label amount
            input(v-model='member.amount' type='text')
        button(@click='memberPaid') pay

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'

export default {
    data(){
        return {
            member: {
                address: 'test',
                amount: 9000
            }
        }
    },
    methods: {
        memberPaid(){
            console.log("current member", this.member)
        }
    },
    components: {
        SharedTitle
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'

#projects
    color:accent1
    font-family: 'Open Sans', light, sans-serif;

li
  color:white
  font-size:18px
  font-family: 'Open Sans', light, sans-serif;

h3
  font-family: 'Open Sans', light, sans-serif;
  font-size:1.6em

</style>
