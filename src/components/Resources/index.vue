<template lang='jade'>

#resource
    router-link(to='/RESOURCE_CREATE').crazybtn
        //- img.left(src='../../assets/images/active14.svg')
        span New Resource
        img(src='../../assets/images/active15.svg')
    shared-title(title='List of Resources')
    tab
        row(v-for="r in resources", :r="r")


</template>

<script>
import Row from "./Row"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'
import Tab from './Tab'

export default {
    computed: {
        resources(){
            return this.$store.state.resources
        }
    },
    components:{
        SharedTitle,
        Row,
        Tab
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'
@import '../../styles/crazybtn'

#resource
    width: 100%

img
    height: 40px
    float:right

.left
    float: left
</style>
