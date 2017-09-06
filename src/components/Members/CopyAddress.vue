<template>

<button :id="addr" @click="toClip"> copy </button>

</template>


<script>
import CopyAddress from './CopyAddress'

export default {
    props: ['addr'],
    components: { CopyAddress },
    methods: {
        toClip(){
            console.log("TODO: copy addr:", this.addr, "https://clipboardjs.com/")
            // https://clipboardjs.com/
        }
    }
}

</script>

<style lang="stylus">

button
    width:

</style>
