<template>
  <HeaderComponent>
    <template #content>
      <img src="@/assets/luceria-logo.svg" alt="logo" class="h-[65px] w-auto" />
      <MobileNavbar />
    </template>
  </HeaderComponent>

  <router-view />
</template>
<script lang="ts">
import MobileNavbar from '@/components/header/MobileNavbar.vue';
import { defineComponent } from 'vue';
import HeaderComponent from './components/header/HeaderComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    MobileNavbar,
    HeaderComponent,
  },

  computed: {
    isMobileDevice() {
      return window.innerWidth <= 768;
    },
  },

  created() {
    document.title =
      import.meta.env.NODE_ENV == 'dev'
        ? '[DEV]' + document.title
        : '' + document.title;
  },
});
</script>
