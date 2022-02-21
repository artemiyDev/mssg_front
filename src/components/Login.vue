<template>
  <div id="app">
    <b-container>
      <b-row class="vh-100" align-v="center" align-h="center">
        <b-col cols="2">
          <b-form-input v-model="email"></b-form-input>
          <b-form-input v-model="password"></b-form-input>
          <input type="submit" class="btn btn-primary" @click="login">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      registerActive: false,
      email: "artemiyshirko@gmail.com",
      password: "Zestaw87",
    }
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["LOGIN_WITH_CREDENTIALS"]),
    async login() {
      await this.LOGIN_WITH_CREDENTIALS({email: this.email, password: this.password})
    }
  },
  watch: {
    isAuthenticated(isAuthenticated) {
      console.log(123)
      if (isAuthenticated) {
        this.$router.push("/pages");
        console.log(123)
      }
    },
  },
  created() {
    if (this.isAuthenticated) {
      this.$router.push("/pages");
      return;
    }
  }
}
</script>

<style scoped>

</style>