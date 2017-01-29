<template lang='jade'>
.bounty.row
    .row
        .six.columns
            .row
                h5 {{ x.name }}: {{ x.amount }} bits
            .row
                span.reserve
                    reserve-btn(:x='x._id')
                claim-btn(:x='x._id')

        .six.columns.description
            p {{ x.description }}
    tags(:x='x.tags')
    hr

</template>
<script> // ES6


import ClaimBtn from './ClaimBtn'
import Tags from './Tags'
import ReserveBtn from './ReserveBtn'

export default {
    props: ['x'],
    components: { Tags, ClaimBtn, ReserveBtn },
}

</script>
<style lang='stylus' scoped>

.reserve
    margin-right:5px

hr
    height: 30px
    border-style: solid
    border-color: black
    border-width: 1px 0 0 0
    border-radius: 20px
    padding-bottom:0
    margin-bottom:0

hr:before  /* Not really supposed to work, but does */
    display: block
    content: ""
    height: 30px
    margin-top: -31px
    border-style: solid
    border-color: black
    border-width: 0 0 1px 0
    border-radius: 20px

.description
    padding: .8em .8em .8em .8em
    border-style:solid
    border-width: 1.8px

    p
        margin:0


.reserve
    margin-right:
</style>
