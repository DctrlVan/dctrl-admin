<template>

<div id="commitments">
    <shared-title title='Commitments'>
        <form-box>
            <h6> Create A Commitment Contract: </h6>
            <label> Commitment Description </label>
            <input
                @input="setCommit"
                type="text"
                placeholder="What do you commit to do?"
                name="newcommit"
                v-model="x"
            ></input>
            <label> Send the amount you wish to commit: </label>
            <img src="../../assets/images/address.svg"></img>
          </form-box>
        <h3>Active Commitments:</h3>
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
    data(){
        return { x:'' }
    },
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
    },
    methods: {
        setCommit(){

        }
    }
}


</script>

<style lang="stylus" scoped>

h3
    text-align:left
    font-size:1.9em

input
    width: 100%

</style>
