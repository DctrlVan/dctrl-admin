<template lang="pug">
.day
  .date {{ day }}

</template>

<script>
import MainEvent from './MainEvent.vue'
import Tooltip from 'tether-tooltip'
import Vue from 'vue'

export default {
  components: {
    MainEvent
  },
  props: ['day', 'month', 'year'],
  computed: { },
}
</script>

<style lang='stylus' scoped>

@import '../../../styles/colours'

  .day
    background-color: main
    overflow: visible

  .date
    text-align:right
    height: 30px
    margin-top: 0
    margin-bottom:-30px
    font-weight: bolder
    font-size: .9em
    padding: 5px 5px 5px 5px

.b
		text-align: center
		border-radius: 8%
		color: main
		font-size: .8em

.p
		background-color: green
		border-right-style: solid
		border-color: green
.c
		background-color: accent2

</style>
