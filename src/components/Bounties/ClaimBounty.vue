<template lang="jade">

modal(:visible='visible', :close='closeModal')
    label THANK YOU!
    p Please provide your member-name and btc address. We will confirm with you before finalizing:
    div
      input(
        type='text',
        placeholder='Your Alias',
        name='name',
        v-model='info.alias',
      )
      input(
        type='text',
        placeholder='Your Bitcoin Address',
        name='address',
        v-model='info.address',
      )
      button(@click.prevent='publishClaim') CLAIM BOUNTY

</template>

<script>
import base58 from 'bs58'
import crypto from 'crypto'

// SHA256(SHA256(buffer))
function sha256x2 (x) {
    let firstHash = crypto.createHash('sha256').update(x).digest()
    return crypto.createHash('sha256').update(firstHash).digest()
}

import Modal from '../generics/utils/Modal'
export default {
    data(){
        return {
            info: {
                alias: '',
                address: '',
            }
        }
    },
    computed: {
        visible(){
            return this.$store.state.bounties.isUserClaiming
        },
        isValidAddress(){
            this.info.address = this.info.address.replace(/\W/g, '')
            let buffer = base58.decode(this.info.address)
            let payload = buffer.slice(0, -4)
            let checksum = buffer.slice(-4)
            let newChecksum = sha256x2(payload)
            // TODO understand why this works
            if (checksum[0] ^ newChecksum[0] |
                checksum[1] ^ newChecksum[1] |
                checksum[2] ^ newChecksum[2] |
                checksum[3] ^ newChecksum[3]){
                return false
            }
            return true
        }
    },
    methods:{
      publishClaim(){
          this.$store
      },
      closeModal(){
          this.$store.commit('setIsUserClaiming', false)
      },
    },
    components: {
      Modal,
    }
}

</script>

<style lang="stylus" scoped>

</style>
