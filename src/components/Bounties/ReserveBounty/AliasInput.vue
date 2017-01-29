<template lang="jade">

input(
    @input='setAlias',
    type='text',
    placeholder='Your Alias',
    name='alias',
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
        setAlias(){
            this.$store.commit('setClaimAlias', this.x)
        },
    },
}

</script>

<style lang="stylus" scoped>



</style>
