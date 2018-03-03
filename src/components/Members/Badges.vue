<template lang='pug'>

.badges
  template(v-for='b in m.badges')
      router-link(v-if='b === "admin"' to='/')
          img(src='../../assets/images/admin.svg')
      router-link(v-if='b === "secure"' to='/badges/secure')
          img(src='../../assets/images/secure.svg')
      router-link(v-if='b === "bitcoin"' to='/')
          img(src='../../assets/images/bitcoin.svg')
      router-link(v-if='b === "doge"' to='/')
          img(src='../../assets/images/doge.png')
      router-link(v-if='b === "pencil"' to='/')
          img(src='../../assets/images/pencil.svg')
      router-link(v-if='b === "bullet"' to='/')
          img(src='../../assets/images/bullet.svg')
      router-link(v-if='b === "bitpepsi"' to='/')
          img(src='../../assets/images/bitpepsi.png')

</template>

<script>

export default {
    name: 'badges',
    props: ['m'],
}

</script>

<style lang='stylus' scoped>

img
    height: 4em
    padding-left: .2345em
    padding-right: .2345em

a:nth-child(odd)
      img
          padding: 1.1em

</style>
