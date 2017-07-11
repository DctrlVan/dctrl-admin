<template>

<div @click='switchToMember(m.address)'>
  <ul :class="{ inactive: !m['active?'] }">
    <label>
        {{m.name}} - {{m.address}}
        <!-- <copy-address :addr="m.address"></copy-address> -->
    </label>

    <li> {{m.email}} </li>
    <li> Member is active?
        <span v-if="m['active?']"> True </span>
        <span v-else> False </span>
    </li>
    <li> Current balance: &nbsp; {{m.balance}} </li>
  </ul>
</router-link>

</template>


<script>
// import CopyAddress from './CopyAddress'

export default {
    props: ['m'],
    components: {  },
    methods: {
        switchToMember(address){
            // use vuex state to pass to member component?
            console.log('this is supposed to redirect to member/' + address)
            this.$router.push('member/' + address);
        }
    }
}

</script>

<style lang="stylus">

// TODO: style .inactive / or .active

</style>
