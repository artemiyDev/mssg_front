<template>
  <div>
    <b-navbar class="container-fluid justify-content-between" toggleable="sm" type="light" variant="light">
      <b-navbar-brand href="/">mssg.me</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item v-if="isAuthenticated">Hello, {{ username }}</b-nav-item>
        <b-nav-item v-else href="/login">Sign in</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
    username() {
      return this.$store.state.auth.user.username
    }
  },

}
</script>