<template><router-view /></template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',

  created() {
    document.title =
      import.meta.env.NODE_ENV == 'dev'
        ? '[DEV]' + document.title
        : '' + document.title;
  },
});
</script>
