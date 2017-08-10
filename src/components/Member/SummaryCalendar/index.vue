<template lang="jade">

#calendar
    .row.legend
        .nine.columns &nbsp;
        .three.columns
            table
                tr
                    td.chargedbox.signcell
                    td.ch Charged
                tr
                    td.paidbox.signcell
                    td Paid
    .row.menu
        .three.columns(@click='prevMonth')
            p prev
        .six.columns {{ month }} / {{year}}
        .three.columns(@click='nextMonth')
            p next
    slot
    .weekday(v-for='dayName in DAYS_OF_WEEK') {{dayName}}
    .placeholder(v-for='placeholder in firstDay')
    day(v-for='day in days', :day="day", :month='month', :year='year')

</template>

<script>
import Day from './Day.vue'

export default {
  components: {
    Day
  },
  methods: {
    nextMonth(){
        this.month++
    },
    prevMonth(){
        this.month--
    }
  },
  computed: {
    firstDay(){
      let date = new Date(this.year, this.month-1, 1)
      let firstDay = date.getDay()
      console.log({date, firstDay})
      return firstDay
    },
    days(){
      return  new Date(this.year, this.month, 0).getDate()
    }
  },
  data () {
    let current = new Date
    let year = current.getFullYear()
    let month = current.getMonth() + 1
    return {
      DAYS_OF_WEEK:['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      month,
      year
    }
  },
}
</script>

<style lang='stylus' scoped>
@import '../../../styles/colours'
#calendar
    color: accent1
    font-size:2em

.menu
    text-align: center

.calendar-column
    float: left
    box-sizing: border-box
    width: (96/7)%
    height: 100px
    border-style:solid
    border-width: 1px
    border-color: accent4
.placeholder
    @extends .calendar-column
.day
    @extends .calendar-column
.weekday
    @extends .calendar-column
    height: 40px
    text-align: center
    font-weight:lighter
    font-size: .7em
    border-style:solid
    color:accent4
.date
    background-color: white
    float: right
    font-weight: bolder
    font-size: .666em

.legend
    margin-top: -70px

td
    border: none

.paidbox, .chargedbox
    height: 20px
    width: 20px

.paidbox
    background-color: accent1
.chargedbox
    background-color: accent2
.signcell
    max-width: 0px

table
    font-size: .7em

tr, td
    padding:0
    padding-left: 11px
.ch
    color: accent2
</style>
