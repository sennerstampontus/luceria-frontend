<template>
  <div
    class="container w-full min-h-[60px] max-h-[78px] border-b-[1px] py-5 border-primary-blue flex justify-between items-center"
  >
    <slot name="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HeaderComponent',
});
</script>
