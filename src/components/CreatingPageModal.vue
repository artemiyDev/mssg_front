<template>
  <div>
    <b-button v-b-modal.page-create-modal>Add page</b-button>
    <b-modal id="page-create-modal" centered hide-header-close title="Add page">
      <b-form-input v-model="slug" placeholder="Enter page name"></b-form-input>
      <b-form-input class="my-2" v-model="name" placeholder="Enter page address"></b-form-input>
    </b-modal>
  </div>
</template>
<script>

export default {
  data() {
    return {
      slug: '',
      name: ''
    }
  },
}
</script>
