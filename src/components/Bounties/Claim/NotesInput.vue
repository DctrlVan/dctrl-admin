<template lang="jade">

input(
    @input='set',
    type='text',
    placeholder='Notes',
    name='notes',
    v-model='x',
)

</template>

<script>

export default {
    data(){
        return {
            x:''
        }
    },
    methods: {
        set(){
            this.$store.commit('setClaimNotes', this.x)
        },
    },
}

</script>

<style lang="stylus" scoped>

@import '../../../styles/colours'

input
    width:100%
    background: accent3

</style>
