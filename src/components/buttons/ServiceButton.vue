<template>
  <a
    :href="linkTo"
    :class="[
      'flex flex-col items-center gap-2 p-4 rounded-md transition-all duration-300',
      `text-${textColor}`,
      'hover:bg-luce-hover-blue',
    ]"
  >
    <div>
      <component :is="icon" />
    </div>
    <p>{{ buttonText }}</p>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ServiceButton',
  props: {
    icon: {
      type: Object,
      default: () => {},
    },
    linkTo: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default: 'white',
    },
  },
});
</script>
