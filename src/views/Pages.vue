<template>
  <div class="d-flex vh-100 align-items-center">
    <div class="container-fluid col-lg-8 col-sm-12">
      <b-row align-h="center">
        <b-col v-for="page in pages" :key="page.name" class="d-flex justify-content-center">
          <PageCard :page-name="page.name" :page-slug="`mssg.me/${page.slug}`"/>
        </b-col>
      </b-row>
      <b-row class="justify-content-center my-5">
        <b-col>
          <CreatingPageModal/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import PageCard from "@/components/PageCard";
import CreatingPageModal from "@/components/CreatingPageModal";

export default {
  components: {CreatingPageModal, PageCard},
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
