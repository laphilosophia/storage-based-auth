<template>
  <nav style="margin: 50px;">
    <nuxt-link to="/" style="font: bold 14pt/1.453 sans-serif; margin-right: 10px;">Home</nuxt-link>
    <nuxt-link to="/login" v-if="!isLoggedIn" style="font: bold 14pt/1.453 sans-serif; margin-right: 10px;">Login</nuxt-link>
    <a href="#" v-if="isLoggedIn" @click="logout" style="font: bold 14pt/1.453 sans-serif; margin-right: 10px;">Logout</a> 
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  mounted () {
    this.$nextTick(() => {})
  }
}
</script>

