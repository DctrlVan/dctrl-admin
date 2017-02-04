<template>

<div id="commitments">
    <really></really>
    <commitment v-for='c in commitments' :x='c'></commitment>
</div>

</template>

<script>
import Commitment from './Commitment'
import Really from './Really'
export default {
    beforeMount(){
        this.$store.commit('setHeader', 'Open Commitments:')
    },
    components: {
        Commitment, Really
    },
    computed: {
      commitments(){
        return this.$store.state.commitments.hwaiting
      }
    }

}


</script>

<style lang="stylus" scoped>

</style>
