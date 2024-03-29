<template>
  <div id="header">
    <div
      ref="navRef"
      class="w-full min-h-[80px] max-h-[90px] border-b-[1px] py-5 border-primary-blue flex justify-between items-center container"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HeaderComponent',
});
</script>
