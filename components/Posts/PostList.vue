<template>
  <section
    class="
      featured-posts
      grid grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      justify-center justify-items-center
      gap-8
    "
  >
    <post-preview
    v-for="post in posts"
    :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :title="post.title"
      :previewText="post.previewText"
      :thumbnail="post.thumbnail"
    />
    
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts:{
      type:Array,
      require: true
    }
  },
};
</script>


<style scoped>
</style>