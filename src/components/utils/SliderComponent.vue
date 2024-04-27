<template>
  <div
    class="container relative flex justify-around w-full p-3 my-4 overflow-hidden bg-gray-200 rounded-md"
  >
    <!-- Sliding background -->
    <div
      class="absolute top-0 bottom-0 left-0 w-1/2 transition-transform duration-500 rounded-md bg-primary-blue"
      :style="{ transform: `translateX(${currentSlide * 100}%)` }"
    ></div>

    <!-- Navigation Buttons/Items -->
    <div
      v-for="(item, index) in items"
      :key="index"
      class="relative z-10 flex-1 text-center cursor-pointer"
      :class="{
        'text-white transition-all duration-400 delay-200':
          currentSlide === index,
        'text-primary-blue-dark': currentSlide !== index,
      }"
      @click="currentSlide = index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'SliderComponent',
  setup() {
    // REFS
    const items = ref(['CV Granskning', 'Testintervju']);
    const currentSlide = ref(0);

    // METHODS
    // SET INITIAL SLIDE
    const setInitialSlide = () => {
      const { name } = router.currentRoute.value;
      switch (name) {
        case 'CVReview':
          currentSlide.value = 0;
          break;
        case 'TestInterview':
          currentSlide.value = 1;
          break;
      }
      console.log(name);

      if (name) router.push({ name });
    };
    setInitialSlide();

    // WATCHERS
    watch(currentSlide, (newValue) => {
      switch (newValue) {
        case 0:
          router.push({ name: 'CVReview' });
          break;
        case 1:
          router.push({ name: 'TestInterview' });
          break;
      }
    });

    return { items, currentSlide };
  },
});
</script>

<style>
/* Additional styling as needed */
</style>
