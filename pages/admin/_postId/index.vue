<template>
  <div class="admin-post-page">
    <section class="update-form w-1/2 m-auto">
      <admin-post-form :post="loadedPost" @submit="submitPost" />
    </section>
  </div>
</template>
<script>
import axios from "axios";
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
export default {
  layout: "admin",
  components: { AdminPostForm },
  asyncData(context) {
    return axios
      .get(
        "https://blog-nuxt-bf85c-default-rtdb.firebaseio.com/posts/" +
          context.params.postId +
          ".json"
      )
      .then((res) => {
        return {
          loadedPost:{... res.data,id:context.params.postId},
        };
      })
      .catch((e) =>context.error());
  },
  created(){

  },
  methods: {
    submitPost(editedPost) {
      this.$store.dispatch('editPost',editedPost)
    },
  },
};
</script>