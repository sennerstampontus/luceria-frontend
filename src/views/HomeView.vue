<template>
  <div class="container py-8">
    <HeroSection />
    <div id="white-space" class="h-12"></div>
  </div>
  <div
    class="py-4 text-2xl font-semibold text-center border-b-2 text-primary-blue"
  >
    <h2 id="tjanster">Tjänster</h2>
  </div>
  <div
    class="w-full p-3 on-hover bg-primary-blue h-min hover:bg-primary-blue-dark"
    @click="$router.push('/tjanster/cvgranskning')"
  >
    <ServiceCard :title="content[0].title" :content="content[0].content" />
  </div>
  <div
    class="w-full p-3 on-hover h-min hover:bg-primary-blue-dark"
    @mouseover="onmouseover = true"
    @mouseleave="onmouseover = false"
    @click="$router.push('/tjanster/testintervju')"
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
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection,
    ServiceCard,
    ServiceButton,
  },

  setup() {
    //REFS
    const onmouseover = ref(false);

    //CONSTANTS
    const content = [
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
    ];

    //COMPUTED
    const isHover = computed(() => {
      let state;
      setTimeout(() => {
        state = onmouseover.value;
      }, 2000);
      return state;
    });

    return {
      CvIcon,
      InterviewIcon,
      content,
      onmouseover,
      isHover,
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
