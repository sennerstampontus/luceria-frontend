<template>
  <div class="container py-8">
    <HeroSection />
    <div id="white-space" class="h-24"></div>
  </div>
  <div
    class="py-4 text-2xl font-semibold text-center border-b-2 text-primary-blue"
  >
    <h2>Tjänster</h2>
  </div>
  <div
    class="w-full p-3 on-hover bg-primary-blue h-min hover:bg-primary-blue-dark"
  >
    <ServiceCard :title="content[0].title" :content="content[0].content" />
  </div>
  <div
    class="w-full p-3 on-hover h-min hover:bg-primary-blue-dark"
    @mouseover="onmouseover = true"
    @mouseleave="onmouseover = false"
  >
    <ServiceCard
      :icon="InterviewIcon"
      :icon-color="onmouseover ? 'white' : '#2F6783'"
      :title="content[1].title"
      :content="content[1].content"
      title-color="primary-blue"
      content-color="primary-blue"
    />
  </div>
  <div class="h-[100px]"></div>
</template>

<script lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import ServiceCard from '@/components/cards/ServiceCard.vue';
import ServiceButton from '@/components/buttons/ServiceButton.vue';
import CvIcon from '@/_icons/CvIcon.vue';
import InterviewIcon from '@/_icons/InterviewIcon.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection,
    ServiceCard,
    ServiceButton,
  },

  computed: {
    isHover() {
      let state;
      setTimeout(() => {
        state = this.onmouseover;
      }, 2000);
      return state;
    },
  },
  data() {
    return {
      CvIcon,
      InterviewIcon,
      content: [
        {
          title: 'CV Granskning',
          content:
            'Har du ett relevant CV för tjänsten du söker? Har du ett CV som är lätt att förstå sig på? Är ditt CV attraktivt för rekryteraren?',
        },
        {
          title: 'Intervjuer',
          content:
            'Ska du snart på intervju och känner är lite osäker? Boka din testintervju här!',
        },
      ],
      onmouseover: false,
    };
  },
});
</script>
<style lang="scss" scoped>
.on-hover:hover :deep(.on-hover) {
  transition: all 0.2s ease-in-out;
  color: white;
}
</style>
