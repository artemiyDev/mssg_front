<template>
  <div class="page-card">
    <div class="p-3">
      <h2 class="page-card-title">{{ pageName }}</h2>
      <span class="page-card-title">{{ pageSlug }}</span>
    </div>
  </div>
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
  min-width: 287px;
  max-width: 287px;
  min-height: 100px;
  max-height: 100px;
  background: #222D35;
  box-shadow: 0 0 0 1px #30393F;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.page-card-title {
  display: flex;
  justify-content: start;
  /*right: -21.13%;*/
  /*top: 27.5%;*/
  /*bottom: 25%;*/
  /*display: flex;*/
  /*align-items: center;*/


  /* Color States/Common/Black */

  color: #F2F2F2;
}
</style>