<template>
  <div class="admin-new-post-page w-10/12 md:w-2/3 m-auto mb-1">
    <section class="new-post-form">
      <admin-post-form @submit="onSubmit" />
    </section>
  </div>
</template>
<script>
import axios from "axios";
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
export default {
  components: { AdminPostForm },
  methods: {
    onSubmit(postData) {
      this.$store.dispatch('addPost',postData)
    },
  },
};
</script>