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
  { label: 'TFSA', count:100, expense:true  },
  { label: 'Besstelgeuse', count: 75 },
  { label: 'Besstelgeuse', count: 75 },
  { label: 'Besstelgeuse', count: 75 },
  { label: 'Besstelgeusdde', count: 75 },
  { label: 'Besstelgesasdduse', count: 75 },
  { label: 'Besstelgeusse', count: 75 },
  { label: 'Besstelgeussfe', count: 75 },
  { label: 'Besstelgsfseuse', count: 75 },
  { label: 'Besstddfelgeuse', count: 75 },
  { label: 'Besstelgeuse', count: 75 },
  { label: 'Besstelgeuse', count: 75 },
  { label: 'Besstelgeuse', count: 75 },
  { label: 'Besstelgeuse', count: 75 },
  { label: 'Besstelgeuse', count: 75 },
  { label: 'Besstelgeuse', count: 75 },
  { label: 'Besstelgeuse', count: 75 },
  { label: 'Besssstelgeuse', count: 75 },
  { label: 'Bessstelgeuse', count: 75 },
  { label: 'Bsesstelgeuse', count: 75 },
  { label: 'Besssfsstelgeuse', count: 75 },
]

const width = 300
const height = 300

const radius = Math.min(width, height) / 2
const colorIn = d3
    .scaleOrdinal()
    .range(['#5eab98', '#f7a400']) // greens

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
            if (d.data.expense){
              return colorOut(d.data.label);
            }
            return colorIn(d.data.label);
          });
    }
}

</script>

<style lang='stylus'>

</style>
