<template>
  <div class="container">
    <h1 class="py-3 text-lg text-center border-b-2">Tjänster</h1>
    <SliderComponent />
    <RouterView />
  </div>
</template>

<script lang="ts">
import SliderComponent from '@/components/utils/SliderComponent.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ServicesView',
  components: {
    SliderComponent,
  },
});
</script>
