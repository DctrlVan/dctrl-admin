<template lang="pug">

.day
  .date {{ day }}
    li(v-for='claim in claimedToday') {{ claim }}

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
  computed: {
		claimedToday() {
				var claimedToday = []
				this.$store.state.task.listOfTaskPaidActions.forEach( action => {
						if (
								this.day == action.day &&
								this.year == action.year &&
								this.month == action.month
						){
								this.$store.state.members.forEach( member => {
										if (member.address == action.address) {
												claimedToday.push( member.name)
										}
								})
						}
				})
				return claimedToday
    },
  },
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
		background-color: accent1
		border-right-style: solid
		border-color: accent1
.c
		background-color: accent2

</style>
