<template lang="jade">

input(
    v-bind:style='inputStyle',
    type='text',
    placeholder='Your Wallet Address',
    name='address',
    v-model='x',
    @input='setClaimAddress',
)

</template>

<script>

import crypto from 'crypto'
import base58 from 'bs58'
function sha256x2 (x) { // for the address checksum
    let firstHash = crypto.createHash('sha256').update(x).digest()
    return crypto.createHash('sha256').update(firstHash).digest()
}

export default {
    data(){
        return {
            x:''
        }
    },
    methods: {
        setClaimAddress(){
            this.$store.commit('setClaimAddress', this.x)
        }
    },
    computed: {
        isValidAddress(){
            let address = _.clone( this.x )
            address = address.replace(/\W/g, '')
            let buffer = base58.decode(address)
            let payload = buffer.slice(0, -4)
            let checksum = buffer.slice(-4)
            let newChecksum = sha256x2(payload)
            if (checksum[0] ^ newChecksum[0] | // TODO explain
                checksum[1] ^ newChecksum[1] |
                checksum[2] ^ newChecksum[2] |
                checksum[3] ^ newChecksum[3]){
                return false
            }
            return true
        },
        inputStyle(){
            if (this.isValidAddress){
                return {
                    background:'#4CAF50'
                }
            }
            return {
            }
        }
    },
}

</script>

<style lang="stylus" scoped>



</style>
