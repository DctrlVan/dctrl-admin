<template lang="jade">

.day
	.date {{ day }}
	main-event(v-for='e in daysEvents', :e='e')

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
    daysEvents() {
				return this.$store.state.calendar.events.filter( event => {
						return (
								this.day === event.date.getDate() &&
								this.month === event.date.getMonth() + 1 &&
								this.year === event.date.getYear() + 1900
						)

				})
    },
  },
}
</script>

<style lang='stylus' scoped>

  .day
    background-color: white
    border-style: dashed
    border-radius: 5px
    border-color: black
    border-width: 1px
    overflow: visible

  .date
    text-align:right
    height: 30px
    margin-top: 0
    margin-bottom:-30px
    color: black
    font-weight: bolder
    font-size: .9em
    padding: 5px 5px 5px 5px

</style>
