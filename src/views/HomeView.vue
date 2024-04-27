<template>
  <div id="hem" class="container py-8">
    <HeroSection />
    <div id="white-space" class="h-12"></div>
  </div>
  <div
    class="py-4 text-2xl font-semibold text-center border-b-2 text-primary-blue md:border-none md:hidden"
  >
    <h2>Tjänster</h2>
  </div>
  <div class="md:container md:hidden">
    <div
      class="w-full p-3 shadow-md on-hover bg-primary-blue h-min hover:bg-primary-blue-dark md:container"
      @click="$router.push('/tjanster/cvgranskning')"
    >
      <ServiceCard :title="content[0].title" :content="content[0].content" />
    </div>
    <div
      class="w-full p-3 my-3 shadow-md on-hover h-min hover:bg-primary-blue-dark"
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

  <div id="tjanster" class="hidden md:block md:w-full md:bg-luce-gray md:py-5">
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
        link-to="/skicka/intervju"
        class="col-start-1 scale-[0.5] text-[1.5rem]"
      />
    </div>
  </div>
  <div class="md:hidden">
    <div class="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
      <h2 class="mb-2 text-lg font-bold text-center">Om oss</h2>
      <p class="text-sm text-gray-700">
        Vi är ett nystartat företag som jobbar med personlig coachning och
        utveckling under tiden man söker jobb. <br /><br />
        Står du inför en rekryteringsprocess? <br />
        Söker du ett nytt jobb? <br />
        Vill du öva på att sitta i en intervju? <br />
        <br />
        Vi hjälper dig med just det! Vårt mål är att göra dig och ditt CV
        anpassat och redo för den specifika tjänsten som du söker, och hjälper
        dig hela vägen in i mål. Vi erbjuder allt från individuell
        karriärframgång till företagstillväxt. Vi ger skräddarsydda support för
        att optimera rekrytering och personalutveckling till alla parter!
      </p>
    </div>

    <div class="p-4 mb-4 rounded-lg shadow-md">
      <h2 class="mb-2 text-lg font-bold text-center">Kontakt</h2>
      <p class="text-sm text-gray-700">
        Har du frågor? <br />Kontakta:
        <a href="mailto:info@luceria.se" class="text-blue-500"
          >info@luceria.se</a
        >
      </p>

      <p class="text-sm text-gray-700">
        Telefon:
        <a href="tel:070 281 45 60" class="font-medium text-blue-500"
          >070 281 45 60</a
        >
      </p>
    </div>
  </div>

  <div class="hidden bg-gray-100 shadow-md md:block">
    <div class="md:container md:grid md:grid-cols-2">
      <div class="col-start-1 row-start-1 p-4 mb-4 rounded-lg">
        <div id="om-oss" class="flex items-center gap-4 mb-3">
          <span
            class="content-center col-start-2 row-start-1 text-3xl text-center material-symbols-outlined"
          >
            contact_support
          </span>

          <h2 class="text-lg font-bold text-center">Om oss</h2>
        </div>

        <p class="text-sm text-gray-700">
          Vi är ett nystartat företag som jobbar med personlig coachning och
          utveckling under tiden man söker jobb. <br /><br />
          Står du inför en rekryteringsprocess? <br />
          Söker du ett nytt jobb? <br />
          Vill du öva på att sitta i en intervju? <br />
          <br />
          Vi hjälper dig med just det! Vårt mål är att göra dig och ditt CV
          anpassat och redo för den specifika tjänsten som du söker, och hjälper
          dig hela vägen in i mål. Vi erbjuder allt från individuell
          karriärframgång till företagstillväxt. Vi ger skräddarsydda support
          för att optimera rekrytering och personalutveckling till alla parter!
        </p>
      </div>

      <div class="col-start-2 row-start-2 p-4 mb-4 rounded-lg justify-self-end">
        <div id="kontakt" class="flex items-center gap-4 mb-3">
          <span
            class="content-center col-start-1 row-start-2 text-3xl text-center material-symbols-outlined"
          >
            mail
          </span>
          <h2 class="text-lg font-bold text-center">Kontakt</h2>
        </div>

        <p class="text-sm text-gray-700">
          Har du frågor? <br />Kontakta:
          <a href="mailto:info@luceria.se" class="text-blue-600"
            >info@luceria.se</a
          >
        </p>
        <p class="text-sm text-gray-700">
          Telefon: <span class="font-medium">070 281 45 60</span>
        </p>
      </div>
    </div>
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
