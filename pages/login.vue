<template>
  <form @submit.prevent="login()" style="margin: 50px;">
    <input type="text" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      }).then(res => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>

</style>
