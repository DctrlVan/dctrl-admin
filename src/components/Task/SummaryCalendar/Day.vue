<template lang="pug">

.day
  .date {{ day }}
    .b(v-for='claim in claimedToday') {{ claim.name }}: {{ claim.amount }}

</template>

<script>

export default {
  props: ['day', 'month', 'year'],
  computed: {
		claimedToday() {
				var claimedToday = []
				this.$store.state.task.taskClaimedEvents.forEach( ev => {
            var a = new Date(ev.timestamp)
            let isToday = (
                this.day == a.getDate() &&
                this.year == a.getFullYear() &&
                this.month == a.getMonth()
            )
            if ( isToday ){
								this.$store.state.members.forEach( member => {
										if (member.memberId == ev.memberId) {
												claimedToday.push({
                            name: member.name,
                            amount: ev.paid.toFixed(2)
                        })
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

  .b
      text-align: center
      border-radius: 8%
      color: accent4
      font-size: .55em
      padding:.05em
      background: accent1

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

.p
		background-color: accent1
		border-right-style: solid
		border-color: accent1
.c
		background-color: accent2

</style>
