<template>
  <router-link :to="{ name: 'Page', params: { slug: pageSlug }}"  class="text-decoration-none">
    <div class="page-card m-3 p-3">
        <h2 class="page-card-title">{{ pageName }}</h2>
        <span class="page-card-title">{{ `mssg.me/${pageSlug}` }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: [
    'pageName', 'pageSlug'
  ]
}
</script>


<style>
.page-card {
  width: 200px;
  display: flex;
  background: #222D35;
  box-shadow: 0 0 0 1px #30393F;
  border-radius: 6px;

  flex-direction: column;
  justify-content: space-evenly;
}

.page-card-title {
  display: flex;
  justify-content: flex-start;
  color: #F2F2F2;
}
</style>