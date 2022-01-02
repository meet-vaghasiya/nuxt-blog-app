<template>
  <div class="posts-page">
    <post-list />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList.vue';
export default {
  layout:'admin',
  components: {
    PostList,
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