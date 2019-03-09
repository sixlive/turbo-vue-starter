<template>
  <div class="font-sans antialiased text-black leading-normal">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['title'],
  watch: {
    title(title) {
      this.updatePageTitle(title)
    },
  },
  mounted() {
    this.updatePageTitle(this.title)
  },
  methods: {
    updatePageTitle(title) {
      document.title = title ? `${title} | Laravel` : `Laravel`
    },
  },
}
</script>
