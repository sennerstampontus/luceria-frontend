<template><hello-world></hello-world></template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
