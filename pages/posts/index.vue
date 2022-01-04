<template>
  <div class="posts-page">
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList.vue";
export default {
  layout: "admin",
  components: {
    PostList,
  },
  // fetch(context) {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       loadedPosts: [
    //         {
    //           id: "1",
    //           title: "First post",
    //           previewText: "First post detail",
    //           thumbnail:
    //             "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
    //         },
    //         {
    //           id: "2",
    //           title: "second post",
    //           previewText: "second post detail",
    //           thumbnail:
    //             "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
    //         },
    //       ],
    //     });
    //   }, 1500);
    // })
    //   .then((data) => {
    //     context.store.commit("setPosts", data.loadedPosts);
    //   })
    //   .catch((e) => {
    //     console.error("console error");
    //   });
  // },
  // created() {
  //   this.$store.dispatch("setPosts", this.loadedPosts);
  // },
  computed: {
    loadedPosts() {
    //   this.$store.dispatch("setPosts", this.loadedPosts);
       return  this.$store.getters.loadedPosts
    },
  },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>