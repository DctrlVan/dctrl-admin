<template lang='jade'>

#shamepie

</template>

<script>

import * as d3 from 'd3'
var dataset = [
  { label: 'Abulia', count: 10 },
  { label: 'Abulia', count: 10 },
  { label: 'Bsdsdetelgeuse', count: 20 },
  { label: 'Besstelgeuse', count: 20 },
  { label: 'Dissjkstra', count: 40 }
];
const width = 300
const height = 300
const radius = Math.min(width, height) / 2
const color = d3.scaleOrdinal(d3.schemeCategory20b)
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
            return color(d.data.label);
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
