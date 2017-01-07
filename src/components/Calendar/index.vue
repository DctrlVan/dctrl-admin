<template lang="jade">

#Calendar
    .weekday(v-for='dayName in DAYS_OF_WEEK') {{dayName}}
    .placeholder(v-for='placeholder in firstDay')
    day(v-for='day in days', :day="day", :month='month', :year='year')

</template>

<script>
  import Day from './Day.vue'

  export default {
    beforeMount(){
        this.$store.commit('setHeader', 'Upcoming Events:')
    },
    components: {
      Day
    },
    computed: {
      firstDay: function(){
        let date = new Date(this.year, this.month-1, 1)
        let firstDay = date.getDay()
        console.log({date, firstDay})
        return firstDay
      }
    },
    data () {
      let current = new Date
      let year = current.getFullYear()
      let month = current.getMonth() + 1
      return {
        DAYS_OF_WEEK:['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        days: new Date(year, month, 0).getDate(),
        month,
        year
      }
    },
  }

</script>

<style lang='stylus' scoped>
  @import "../../styles/main"

  #calendar
    display:block

  #whenlabel
    content-align:center
    font-weight:bolder
    font-size:1.1em

  .calendar-column
    float: left
    box-sizing: border-box
    width: (96/7)%
    height: 100px

  .placeholder
    @extends .calendar-column

  .day
    @extends .calendar-column

  .weekday
    @extends .calendar-column
    height: 25px
    text-align: center
    font-weight:bolder

  .date
    background-color: white
    float: right
    font-weight: bolder
    font-size: .666em

</style>
