<template>
  <div class="w-full text-center rounded-xl background-graphic">
    <h1 class="mb-6 text-xl text-white">
      Vi hjälper dig inför dina rekryteringsprocesser!
    </h1>
    <BasicLinkButton buttonText="Läs mer" linkTo="#om-oss" />
  </div>
</template>

<script lang="ts">
import BasicLinkButton from '@/components/buttons/BasicLinkButton.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HeroSection',
  components: {
    BasicLinkButton,
  },
});
</script>
<style lang="scss" scoped>
.background-graphic {
  position: relative;
  background-image: url('@/assets/bg-graphics.svg');
  background-size: cover;
  background-position: center;
  padding: 2rem;
}

.background-graphic::before {
  content: '';
  position: absolute; /* Position relative to the parent */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25); /* Black with 50% opacity */
  z-index: 1; /* Ensures overlay is above the background image */
  border-radius: 0.75rem;
}

/* Ensure content is above the overlay */
.background-graphic > * {
  position: relative;
  z-index: 2;
}
</style>
