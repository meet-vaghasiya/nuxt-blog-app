<template>
  <form action="#" @submit.prevent="onSave">
    <app-control-input v-model="editedPost.author"
      >Author Name</app-control-input
    >

    <app-control-input v-model="editedPost.title">Title</app-control-input>

    <app-control-input v-model="editedPost.thumbnail"
      >Thumbnail Link</app-control-input
    >

    <app-control-input control-type="textarea" v-model="editedPost.content"
      >Content</app-control-input
    >
    <app-control-input control-type="textarea" v-model="editedPost.previewText"
      >PreviewText</app-control-input
    >

    <app-button type="submit">Save</app-button>

    <app-button
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</app-button
    >
  </form>
</template>
<script>
import AppButton from "~/components/UI/AppButton.vue";
import AppControlInput from "~/components/UI/AppControlInput.vue";
export default {
  components: { AppButton, AppControlInput },
  props:{
      post:{
          required:false,
          type: Object
      }
  },
  data() {
    return {
      editedPost:  this.post ? {...this.post } : {
        author: "",
        title: "",
        thumbnail: "",
        content: "",
        previewText:""
      },
    };
  },
  methods: {
    onSave() {
      // console.log(this.editedPost, "edit post");
      this.$emit('submit',{...this.editedPost,updatedDate:  new Date()})
    },
    onCancel() {
      this.$router.push("/admin");
    },
  },
};
</script>