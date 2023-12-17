<template>
  <div class="container py-4">
    <HeroSection />
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
