<template lang='jade'>

div
  img(v-if='r.location == "mainroom"' src='../../assets/images/space_main-room.svg')
  img(v-if='r.location == "backroom"' src='../../assets/images/space_back-room.svg')
  img(v-if='r.location == "hallway"' src='../../assets/images/space_hall-way.svg')
  img(v-if='r.location == "recordingroom"' src='../../assets/images/space_main-room.svg')

</template>


<script>



export default {
    methods: {
        calcUse(r){
            if (Math.random() > .8765 ){
                return {
                    use:true
                }
            }
        }
    },
    props: ['r'],
}

</script>

<style lang="stylus" scoped>
@import '../../styles/spinners'

img
    height: 90px

</style>
