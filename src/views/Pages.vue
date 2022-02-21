<template>
  <div class="d-flex vh-100 align-items-center">
    <div class="container-fluid">
      <b-row class="justify-content-center">
        <b-col cols="2" v-for="page in pages" :key="page.name">
          <PageCard :page-name="page.name" :page-slug="`mssg.me/${page.slug}`"/>
        </b-col>
      </b-row>
      <b-row class="justify-content-center my-5">
        <b-col cols="1">
          <b-button variant="primary">Add page</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import PageCard from "@/components/PageCard";

export default {
  components: {PageCard},
  data() {
    return {}
  },
  computed: {
    pages() {
      return this.$store.state.auth.user.pages
    }
  }
}
</script>
