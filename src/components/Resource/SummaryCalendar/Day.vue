<template lang="pug">
.day
  .date {{ day }}
    div
      .six.columns.p.b(v-if='usedThisDay > 0')
        div {{ usedThisDay }}
      .six.columns(v-else) &nbsp;
        .six.columns.c.b(v-if='updatedThisDay > 0')
          div {{ updatedThisDay }}
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
		usedThisDay() {
				var self = this
				var used = 0

				this.$store.state.resource.resourceUsedEvents.forEach( ev => {
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
								let amount = parseFloat(ev.used)
								if (amount > 0){
										used += amount
								}
						}
				})
				console.log({used})
				if (used > 0){
						return used.toFixed(2)
				}else {
						return ''
				}
    },
		updatedThisDay() {
				var updated = 0
				this.$store.state.resource.resourceUpdatedEvents.forEach( ev => {
						var a = new Date(ev.timestamp)
						if (
								this.day == a.getDate() &&
								this.year == a.getFullYear() &&
								this.month == a.getMonth()
						){
								let amount = parseFloat(ev.amount)
								if (amount > 0){
										updated += amount
								}
						}
				})
				if (updated > 0){
						return updated.toFixed(2)
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
