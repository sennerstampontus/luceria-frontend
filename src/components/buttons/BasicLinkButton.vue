<template>
  <a :href="linkTo">
    <button
      :class="[
        'px-4 py-2 rounded-2xl md:py-3 md:px-9',
        `bg-${background} text-${textColor}`,
      ]"
    >
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
    background: {
      type: String,
      required: false,
      default: 'white',
    },
    textColor: {
      type: String,
      required: false,
      default: 'black',
    },
  },
});
</script>
