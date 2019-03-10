<template>
  <form :action="route(action)" method="POST">
    <input type="hidden" name="_method" :value="method || 'POST'" />
    <input type="hidden" name="_token" :value="token" />
    <slot />
  </form>
</template>

<script>
export default {
  props: ['action', 'method'],
  computed: {
    token() {
      return this.$store.csrf
    },
  },
}
</script>
