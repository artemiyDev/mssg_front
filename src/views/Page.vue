<template>
  <div>
    <!--    {{ $route.params.slug }}-->
    <div class="d-flex vh-100 align-items-center">
      <b-container class="col-lg-12">
        <b-row align-h="center">
          <b-col class="d-flex justify-content-center">
            <div class="main-page">
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>


import axios from "@/api/backend";

export default {
  data() {
    return {}
  },
  computed: {},
  methods: {
    async getPageData() {
      await axios.get(`/api/v1/pages/${this.$route.params.slug}`)
    }
  },
  mounted() {
    this.getPageData()
  }
}
</script>

<style>
.main-page {
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 663px;

  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 30px 0 rgb(0 0 0 / 8%);
}
</style>