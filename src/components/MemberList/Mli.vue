<template>
<ul>
  <label> {{m.name}} </label>
  <li> {{m.address}} </li>
  <li> {{m.email}} </li>
  <li> {{m.balance}} </li>
</ul>
</template>


<script>

export default {
    props: ['m']
}

</script>
