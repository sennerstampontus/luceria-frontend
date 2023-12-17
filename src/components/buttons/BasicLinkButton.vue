<template>
  <a :href="linkTo">
    <button class="px-4 py-2 bg-white rounded-2xl">
      {{ buttonText }}
    </button>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BasicLinkButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    linkTo: {
      type: String,
      required: true,
    },
  },
});
</script>
