<template>
  <div>
    <b-button v-b-modal.page-create-modal>Add page</b-button>
    <b-modal id="page-create-modal" centered hide-header-close @ok="handleOk" title="Add page">
      <b-form-input v-model="name" placeholder="Enter page name"></b-form-input>
      <b-form-input id="input-live" :state="inputValid" v-on:change="checkSlugExists" class="my-2" v-model="slug"
                    placeholder="Enter page address"></b-form-input>
      <b-form-invalid-feedback id="input-live-feedback">
        Page address already exists
      </b-form-invalid-feedback>
    </b-modal>
  </div>
</template>
<script>
import axios from "../api/backend";

export default {
  data() {
    return {
      slug: '',
      name: '',
      slugExists: false,

    }
  },
  computed: {
    inputValid() {
      console.log(this.slugExists)
      if (this.slugExists) {
        return false
      } else {
        return null
      }
    }
  },
  methods: {
    async checkSlugExists() {
      await axios.post('api/v1/pages/create/attempt/', {"slug": this.slug})
          .then(response => {
            this.slugExists = !response.data.ok;
          })
    }
    ,
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault()

      if (!this.slugExists) {
        this.$nextTick(() => {
          this.$bvModal.hide('page-create-modal')
        })
      }

    }
  },
}
</script>
