<template lang="jade">

.day
		.date {{ day }}
				div
						.six.columns.p.b(v-if='paidThisDay > 0')
								div {{ paidThisDay }}
						.six.columns(v-else) &nbsp;
						.six.columns.c.b(v-if='chargedThisDay > 0')
								div {{ chargedThisDay }}
	//- main-event(v-for='e in daysEvents', :e='e')

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
		paidThisDay() {
				var paid = 0

				this.$store.state.history.listOfMemberPaidActions.forEach( action => {
						if (
								this.day == action.day &&
								this.year == action.year &&
								this.month == action.month
						){
								let amount = parseFloat( action.amount )
								if (amount > 0){
										console.log('trying to increase paid', {action, paid})
										paid += amount
								}
						}
				})

				if (paid > 0){
						return paid.toFixed(2)
				}else {
						return ''
				}
    },
		chargedThisDay() {
				var charged = 0
				this.$store.state.history.listOfMemberChargedActions.forEach( action => {
						if (
								this.day == action.day &&
								this.year == action.year &&
								this.month == action.month
						){
								let amount = parseFloat( action.amount )
								if (amount > 0){
										console.log('trying to increase charged', {action, charged})
										charged += amount
								}
						}
				})
				if (charged > 0){
						return charged.toFixed(2)
				}else {
						return ''
				}
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
