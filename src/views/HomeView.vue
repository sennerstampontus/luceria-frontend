<template>
  <div class="container py-8">
    <HeroSection />
    <div id="white-space" class="h-24"></div>
  </div>

  <div class="bg-primary-blue w-full min-h-[100px] my-5 py-5">
    <div class="py-6 text-xl font-semibold text-center text-white">
      <h2>Tjänster</h2>
    </div>
    <div class="container flex justify-between">
      <ServiceButton
        class="hover:bg-primary-blue-dark"
        :icon="CvIcon"
        linkTo="/tjanster-cv"
        buttonText="Få hjälp med CV"
      />
      <ServiceButton
        class="hover:bg-primary-blue-dark"
        :icon="InterviewIcon"
        linkTo="/tjanster-intervju"
        buttonText="Boka testintervju"
      />
    </div>
  </div>
</template>

<script lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import ServiceButton from '@/components/buttons/ServiceButton.vue';
import CvIcon from '@/_icons/CvIcon.vue';
import InterviewIcon from '@/_icons/InterviewIcon.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection,
    ServiceButton,
  },
  data() {
    return {
      CvIcon,
      InterviewIcon,
    };
  },
});
</script>
