<template>
  <div class="admin-page p-6">
    <app-button
      class="new-post text-center border-2 border-grey-200 pb-2"
      @click="$router.push('/admin/new-post')"
    >
      create
    </app-button>
    <div class="existing-post">
      <h1 class="text-center">Existing post</h1>
      <post-list :isAdmin="true" />
    </div>
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList.vue";
import AppButton from "~/components/UI/AppButton.vue";

export default {
  layout: "admin",
  components: { PostList, AppButton },
};
</script>

<style scoped>
</style>