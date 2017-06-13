<template>

<ul>
  <label>
      {{b.name}}
  </label>
  <li> {{b.description}} </li>
  <li> Last claimed by: {{b.address}}
  <li> Monthly Value: &nbsp; {{b.value}} </li>
</ul>

</template>


<script>

export default {
    props: ['b'],
    components: { }
}

</script>

<style lang="stylus">

// TODO: style .inactive / or .active

</style>
