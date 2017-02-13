<template lang='jade'>

#projects
    shared-title(title='Projects')
        p Document our current projects and brainstorm/plan future projects. App design needed....
        p Current Projects
        li RFID Door - key fod access to dctrl
        li Bitcoin Vending Machine
        li Kegorator - by volume, bitcoin accepting keg
        li Fully addressable LED sidewalk.
        li Graphical user interface for sidewalk (and/or api)
        li dctrl server services (bitcore, tumblebit, library)
        li dctrlapp - bounties, commitments, finances
        li coinOS - bitcoin coop merchant processing reboot.
</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'

export default {
    components: {
        SharedTitle
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'

#projects
    color:accent1

</style>
