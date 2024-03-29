<template>
  <HeaderComponent>
    <template #content>
      <RouterLink to="/">
        <img
          src="@/assets/luceria-logo.svg"
          alt="logo"
          class="h-[65px] w-auto"
        />
      </RouterLink>
      <MobileNavbar v-if="isMobileDevice" />
      <DesktopNavbar v-else />
    </template>
  </HeaderComponent>

  <router-view />
  <FooterSection />
</template>
<script lang="ts">
import MobileNavbar from '@/components/header/MobileNavbar.vue';
import DesktopNavbar from '@/components/header/DesktopNavbar.vue';
import { computed, defineComponent, onMounted } from 'vue';
import HeaderComponent from './components/header/HeaderComponent.vue';
import FooterSection from './components/sections/FooterSection.vue';

export default defineComponent({
  name: 'App',
  components: {
    MobileNavbar,
    DesktopNavbar,
    HeaderComponent,
    FooterSection,
  },

  setup() {
    // ON MOUNTED
    onMounted(() => {
      document.title =
        import.meta.env.VITE_ENV == 'dev'
          ? '[DEV]' + document.title
          : '' + document.title;
    });

    // COMPUTED
    const isMobileDevice = computed(() => {
      return window.innerWidth <= 768;
    });

    return {
      isMobileDevice,
    };
  },

  computed: {
    isMobileDevice() {
      return window.innerWidth <= 768;
    },
  },
});
</script>
