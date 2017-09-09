<template lang='jade'>

div
  div(v-if='r.active > 0')
      img(:class='calcSpin(r)' v-if='r.active == 1' src='../../assets/images/active1.svg')
      img(:class='calcSpin(r)' v-if='r.active == 2' src='../../assets/images/active2.svg')
      img(:class='calcSpin(r)' v-if='r.active == 3' src='../../assets/images/active3.svg')
      img(:class='calcSpin(r)' v-if='r.active == 4' src='../../assets/images/active4.svg')
      img(:class='calcSpin(r)' v-if='r.active == 5' src='../../assets/images/active5.svg')
      img(:class='calcSpin(r)' v-if='r.active == 6' src='../../assets/images/active6.svg')
      img(:class='calcSpin(r)' v-if='r.active == 7' src='../../assets/images/active7.svg')
      img(:class='calcSpin(r)' v-if='r.active == 8' src='../../assets/images/active8.svg')
      img(:class='calcSpin(r)' v-if='r.active == 9' src='../../assets/images/active9.svg')
      img(:class='calcSpin(r)' v-if='r.active == 10' src='../../assets/images/active10.svg')
      img(:class='calcSpin(r)' v-if='r.active == 11' src='../../assets/images/active11.svg')
      img(:class='calcSpin(r)' v-if='r.active == 12' src='../../assets/images/active12.svg')
      img(:class='calcSpin(r)' v-if='r.active == 13' src='../../assets/images/active13.svg')
      img(:class='calcSpin(r)' v-if='r.active == 14' src='../../assets/images/active14.svg')
      img(:class='calcSpin(r)' v-if='r.active >= 15' src='../../assets/images/active15.svg')
  img(v-else src='../../assets/images/inactive.svg')

</template>


<script>



export default {
    methods: {
        calcSpin(m){
            if (Math.random() > .8765 ){
                return {
                    spin:true
                }
            }
        }
    },
    props: ['m'],
}

</script>

<style lang="stylus" scoped>
@import '../../styles/spinners'

img
    height: 60px

</style>
