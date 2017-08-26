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
				var self = this
				var paid = 0

				this.$store.state.member.listOfMemberPaidEvents.forEach( ev => {
						var a = new Date(ev.timestamp)
						console.log(
							a.getDate(),
							a.getFullYear(),
							a.getMonth()
						)
						let isToday = (
								self.day == a.getDate() &&
								self.year == a.getFullYear() &&
								self.month == a.getMonth()
						)
						if ( isToday ){
								let amount = parseFloat(ev.amount)
								if (amount > 0){
										paid += amount
								}
						}
				})
				console.log({paid})
				if (paid > 0){
						return paid.toFixed(2)
				}else {
						return ''
				}
    },
		chargedThisDay() {
				var charged = 0
				this.$store.state.member.listOfMemberChargedEvents.forEach( ev => {
						var a = new Date(ev.timestamp)
						if (
								this.day == a.getDate() &&
								this.year == a.getFullYear() &&
								this.month == a.getMonth()
						){
								let amount = parseFloat(ev.amount)
								if (amount > 0){
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
		background-color: green
		border-right-style: solid
		border-color: green
.c
		background-color: accent2

</style>
