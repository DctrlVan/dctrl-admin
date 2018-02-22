<template lang='pug'>

.resources
    h3.stock {{ r.stock }}
    h3 {{ r.name }}
    .row
        .six.columns
            label recently used by:
            current(v-for='memberId in currentMembers', :memberId='memberId')
        .six.columns
            router-link(:to='"/invoice_create/" + r.resourceId')
                button purchase
            router-link(:to='"/resource_stock/" + r.resourceId')
                button.refill refill

</template>

<script>

import Current from './Current'

export default {
    props: ['r'],
    components: { Current },
    computed: {
        currentMembers(){
            return this.r.current.map(ev => ev.memberId)
        },
    },
}

</script>

<style lang="stylus" scoped>

@import '../../styles/button'
@import '../../styles/grid'
@import '../../styles/colours'

.resources
    width: 100%
    border-style: dotted
    border-color: accent2
    border-width: 1px
    padding: 1em

.stock
    float: right
    color: accent2

.refill
    color: main
    background: green
    border-color: green

</style>
