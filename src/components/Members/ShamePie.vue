<template lang='jade'>

#shamepie

</template>

<script>

import * as d3 from 'd3'
var dataset = [
  { label: 'Rent', count: 1400, expense:true },
  { label: 'OtherFixedCosts', count: 200, expense:true },
  { label: 'CleaningBouties', count:200, expense:true  },
  { label: 'OtherBouties', count:100, expense:true  },
  { label: 'Besstelgeuse', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
  { label: 'Dissjkstra', count: 75 },
];
const width = 300
const height = 300
const radius = Math.min(width, height) / 2
const colorIn = d3
    .scaleOrdinal()
    .range(['#0cff0B', '#4CAF50']) // greens

const colorOut =  d3.scaleOrdinal()
    .range(['#A20114','#A20000','#Ab0c0b']) // reds

const arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(radius)

const pie = d3
    .pie()
    .value(function(d) { return d.count; })
    .sort(null)

export default {
    mounted(){
        let width = 300
        const svg = d3.select('#shamepie')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')')

        const path = svg.selectAll('path')
          .data(pie(dataset))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d, i) {
            console.log(d)
            if (d.data.expense){
              return colorOut(d.data.label);
            }
            return colorIn(d.data.label);
          });
    }
}

</script>

<style lang='stylus'>

#members
    background:#dbd8d8
    margin-top:0

h1
    text-align:right

h3
    padding:10em

</style>
