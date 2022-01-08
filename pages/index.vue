<template>
  <div class="home-page container m-auto">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <post-list :posts="loadedPost"></post-list>
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList.vue";
export default {
  components: {
    PostList,
  },
  // data() {
  //   return {
  //     loadedPost: [],
  //   };
  computed:{
    loadedPost(){
      return  this.$store.getters.loadedPosts
    }
  }
  // asyncData(context, callback) {
  //   console.log(context,'async data is excuted')
  //   setTimeout(() => {
  //     callback(null, {
  //       loadedPost: [
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
  // },
  // created() {
  //   setTimeout(() => {}, 1500);
  // },
};
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url("~/assets/images/main-page-background.jpg");
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>