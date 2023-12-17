<template>
  <div class="container py-8">
    <HeroSection />
    <div id="white-space" class="h-24"></div>
  </div>

  <div class="bg-primary-blue w-full min-h-[100px] my-5">
    <div class="py-3 text-xl font-semibold text-center text-white">
      <h2>Tjänster</h2>
    </div>
    <div class="container"></div>
  </div>
</template>

<script lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection,
  },
});
</script>
