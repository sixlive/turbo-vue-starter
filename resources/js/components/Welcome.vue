<template>
  <Layout title="Welcome">
    <div class="min-h-screen flex items-center justify-center">
      <h1 class="text-5xl text-purple font-sans">{{ welcomeMessage }}</h1>
    </div>
  </Layout>
</template>

<script>
export default {
  props: ['welcomeMessage'],
}
</script>
