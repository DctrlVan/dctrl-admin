<template lang='pug'>

.changer
  h6 change your information:
    select(v-model='change.field')
        option password
        option e-mail
        option hackername
    input(type='password' v-model='change.newfield')
    button change
</template>

<script>

export default {
    components: {

    },
    data(){
        return {
            change: {
                field: 'password',
                newfield: ''
            }
        }
    }
}
</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

.changer
    padding: 1em
    background: accent3
    content-align: right

input
    z-index:123123


</style>
