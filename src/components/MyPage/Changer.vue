<template lang='pug'>

.changer
  h6 change your information:
    form-box(event='member-field-updated', :data='changeReq', btntxt='change your account')
        select(v-model='change.field')
            option(value='secret') password
            option(value='email') e-mail
            option(value='name') hackername
        input(:type='inputType' v-model='change.newfield', :placeholder='"new " + change.field ')
  p(v-if='!secure') Please change your password; extra points for using a password manager or ubikey!

</template>

<script>

import FormBox from '../slotUtils/FormBox'

export default {
    components: {
        FormBox
    },
    mounted(){
        this.change.memberId = this.$store.getters.memberId
        console.log('mounted with memberID', this.$store.getters.memberId)
        console.log('CHNAGE', this.change )
    },
    computed: {
        changeReq(){
            return {
                field: this.change.field,
                newfield: this.change.newfield,
                memberId:  '9cb4a430-0c3e-11e8-b7bb-db59b0da68eb'  // this.$store.getters.memberId
            }
        },
        secure(){
            let secure = false
            if ( this.$store.getters.member.badges ) {
                secure = this.$store.getters.member.badges.some(b => b === 'secure')
            }
            return secure
        },
        inputType(){
            if (this.change.field === 'password'){
                return 'password'
            } else {
                return 'text'
            }
        }
    },
    data(){
        return {
            change: {
                field: 'secret',
                newfield: '',
            }
        }
    }
}
</script>

<style lang='stylus' scoped>

@import '../../styles/colours'
@import '../../styles/button'

.changer
    padding: 1em
    background: accent4
    content-align: right
    color: white

input, select
    z-index:123123
    color: main


</style>
