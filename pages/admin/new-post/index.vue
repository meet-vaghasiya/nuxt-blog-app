<template>
  <div class="admin-new-post-page w-10/12 md:w-2/3 m-auto mb-1">
    <section class="new-post-form">
      <admin-post-form />
    </section>
  </div>
</template>
<script>
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
export default {
  layout:'admin',
  components: { AdminPostForm },
};
</script>