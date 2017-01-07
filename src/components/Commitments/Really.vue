<template lang='jade'>

Modal(:visible='really', :close='close')
    h3 Did you really? Be honest!
    button yos
    hr
    button no

</template>

<script>

import Modal from '../generics/utils/Modal'

export default {
    data(){
        return {
            really:true
        }
    },
    methods: {
        close(){
            this.really = false
        }
    },
    components:{
        Modal
    }
}

</script>

<style></style>
