<template>

<div id="commitments">
    <really></really>
    <shared-title title='Commitments'>
        <commitment v-for='c in commitments' :x='c'></commitment>
    </shared-title>
</div>

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import Commitment from './Commitment'
import Really from './Really'

export default {
    components: {
        SharedTitle,
        Commitment,
        Really
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
