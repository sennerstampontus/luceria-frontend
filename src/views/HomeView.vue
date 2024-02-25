<template>
  <div class="container py-8">
    <HeroSection />
    <div id="white-space" class="h-12"></div>
  </div>
  <div
    class="py-4 text-2xl font-semibold text-center border-b-2 text-primary-blue md:border-none md:hidden"
  >
    <h2 id="tjanster">Tjänster</h2>
  </div>
  <div class="md:container md:hidden">
    <div
      class="w-full p-3 on-hover bg-primary-blue h-min hover:bg-primary-blue-dark md:container"
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
  </div>

  <div class="hidden md:block md:w-full md:bg-luce-gray md:py-5">
    <div class="font-sans text-3xl font-semibold logo-with-lines">
      Våra tjänster
    </div>

    <div
      :class="[
        'container grid my-16 grid-columns section',
        isVisable['RESUME'] ? 'fade-in' : '',
      ]"
    >
      <div :class="'w-[150px]'">
        <img
          src="@/assets/resume-review.webp"
          alt="resume.webp"
          :class="['rounded-lg']"
        />
      </div>
      <div ref="RESUME_REF">
        <h2 class="pb-2 font-semibold text-center">CV Granskning</h2>
        <p>
          Är ditt CV anpassat för den position du ansöker till? Är det lättläst
          och greppbart? Framhäver ditt CV dina styrkor på ett sätt som
          engagerar rekryteraren? Genom att vända dig till oss
          <strong>kan vi skapa ett elegant och professionellt CV.</strong>
          Hjälper dig att ha tydlighet i ditt CV där det finns möjlighet det
          skapar förvirring. Vi gör ditt CV mer överskådligt och
          användarvänligt, vilket underlättar för rekryteraren att snabbt få en
          klar bild av din kompetens.
        </p>
      </div>
      <ServiceButton
        :icon="CvIcon"
        button-text="Skicka CV"
        link-to="/skicka/cv"
        class="col-start-2 scale-[0.5] text-[1.5rem]"
      />
    </div>
    <div
      :class="[
        'container grid my-16 grid-columns-rev section',
        isVisable['INTERVIEW'] ? 'fade-in' : '',
      ]"
    >
      <div ref="INTERVIEW_REF">
        <h2 class="pb-2 font-semibold text-center">Test interview</h2>
        <p>
          Är du nervös inför din kommande intervju?
          <strong>Boka en övningssession med oss</strong><br />
          Vi kan assistera dig genom att bygga upp ditt självförtroende inför
          intervjun. Det är ocksp viktigt att få konstruktiv feedback på vad du
          kan förbättra inför din faktiska intervju, det hjäper vi dig med. Är
          det mer du undrar eller funderar över? Vi finns här för att svara på
          dina frågor.
        </p>
      </div>

      <div class="w-[150px] justify-self-end">
        <img
          src="@/assets/test-interview.webp"
          alt="testinterview.webp"
          class="rounded-lg"
        />
      </div>
      <ServiceButton
        :icon="InterviewIcon"
        button-text="Boka testintervju"
        link-to="/skicka/cv"
        class="col-start-1 scale-[0.5] text-[1.5rem]"
      />
    </div>

    <!-- <CVReviewView />
  </div>
  <div class="hidden md:block md:py-5">
    <TestInterviewView />
  </div> -->
  </div>
  <div
    class="my-5 font-sans text-3xl font-semibold text-center logo-with-lines"
  >
    <h2>Om oss</h2>
  </div>

  <div
    class="my-5 font-sans text-3xl font-semibold text-center bg-luce-gray logo-with-lines"
  >
    <h2>Kontakt</h2>
  </div>

  <div class="h-[100px]"></div>
</template>

<script lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import ServiceCard from '@/components/cards/ServiceCard.vue';
import ServiceButton from '@/components/buttons/ServiceButton.vue';
import CvIcon from '@/_icons/CvIcon.vue';
import InterviewIcon from '@/_icons/InterviewIcon.vue';
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue';
import CVReviewView from './CVReviewView.vue';
import TestInterviewView from './TestInterviewView.vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    CvIcon,
    InterviewIcon,
    HeroSection,
    ServiceCard,
    ServiceButton,
    CVReviewView,
    TestInterviewView,
  },

  setup() {
    //REFS
    const onmouseover = ref(false);

    const RESUME_REF = ref<HTMLElement | null>(null);
    const INTERVIEW_REF = ref<HTMLElement | null>(null);
    const ABOUT_REF = ref<HTMLElement | null>(null);

    const isVisable = ref({
      RESUME: false,
      INTERVIEW: false,
      ABOUT: false,
    });

    //METHODS

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisable.value['RESUME'] = true;

          setTimeout(() => {
            isVisable.value['INTERVIEW'] = true;
          }, 500);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

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

    //LIFE CYCLE HOOKS

    onMounted(() => {
      if (RESUME_REF.value) observer.observe(RESUME_REF.value);
      if (INTERVIEW_REF.value) observer.observe(INTERVIEW_REF.value);
      if (ABOUT_REF.value) observer.observe(ABOUT_REF.value);
    });

    onUnmounted(() => {
      observer.disconnect();
    });

    return {
      CvIcon,
      InterviewIcon,
      content,
      onmouseover,
      isHover,
      RESUME_REF,
      INTERVIEW_REF,
      ABOUT_REF,
      isVisable,
    };
  },
});
</script>
<style lang="scss" scoped>
.on-hover:hover :deep(.on-hover) {
  transition: all 0.2s ease-in-out;
  color: white;
}

.logo-with-lines {
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.logo-with-lines::before,
.logo-with-lines::after {
  content: '';
  background-color: #fff; /* Line color */
  height: 1px; /* Line thickness */
  flex-grow: 1; /* Makes lines grow to fill space */
}

.logo-with-lines::before {
  margin-right: 10px; /* Spacing between line and logo */
}

.logo-with-lines::after {
  margin-left: 10px; /* Spacing between logo and line */
}

.grid-columns {
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: center;
}
.grid-columns-rev {
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  align-items: center;
}

.section {
  opacity: 0;
  transition: opacity 1s;
}

.section.fade-in {
  opacity: 1;
}
</style>
