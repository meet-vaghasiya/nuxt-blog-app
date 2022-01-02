<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </div>
</template>
<script>
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
export default {
  layout:'admin',
  components: { AdminPostForm },
  data(){
      return {
          loadedPost:{
              author:'MEet',
              title:'title',
              content:'Super content',
              thumbnailLink:"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
      }
  }
};
</script>