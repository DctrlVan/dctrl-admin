<template>

<div id="commitments">
    <shared-title title='Commitments'>
        <form-box>
          <label> bitcoin address </label>
        </form-box>
        <commitment v-for='c in commitments' :x='c'></commitment>
    </shared-title>
</div>

</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'
import Commitment from './Commitment'
import Really from './Really'

export default {
    components: {
        SharedTitle,
        FormBox,
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
