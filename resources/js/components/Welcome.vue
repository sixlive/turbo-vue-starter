<template>
  <Layout title="Welcome">
    <div class="min-h-screen flex items-center justify-center">
      <h1 class="text-5xl text-purple font-sans">{{ welcome_message }}</h1>
    </div>
  </Layout>
</template>

<script>
export default {
  props: ['welcome_message'],
}
</script>
