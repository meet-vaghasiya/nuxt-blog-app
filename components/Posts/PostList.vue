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
      id="1"
      :is-admin="isAdmin"
      title="Welcome to the first post"
      previewText="Preview text"
      thumbnail="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    />
    <post-preview
      id="2"
      :is-admin="isAdmin"
      title="Welcome to the second post"
      previewText="Preview text"
      thumbnail="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
    />
    <post-preview
      id="3"
      :is-admin="isAdmin"
      title="Welcome to the third post"
      previewText="Preview   thied text"
      thumbnail="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
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
  },
};
</script>


<style scoped>
</style>