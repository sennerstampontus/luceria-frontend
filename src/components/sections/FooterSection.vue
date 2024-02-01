<template>
  <div class="relative bottom-0 w-full mt-40">
    <div class="w-full py-4 h-max bg-primary-blue-dark">
      <div class="container flex justify-between text-white">
        <div class="flex-1 hidden gap-8 md:flex md:border-b-[1px]">
          <div id="footer-services" class="py-5 md:flex-1">
            <h3 class="font-semibold">Tjänster</h3>
            <p>CV Granskning</p>
            <p class="py-1">Intervjuer</p>
          </div>
          <div id="footer-about" class="py-5">
            <h3 class="font-semibold">Om oss</h3>
            <p>Kort om Luceria</p>
            <!-- <p class="py-1">Historian</p> -->
          </div>
        </div>
        <div id="footer-services" class="py-5 md:hidden">
          <h3 class="font-semibold">Tjänster</h3>
          <p>CV Granskning</p>
          <p class="py-1">Intervjuer</p>
        </div>
        <div id="footer-about" class="py-5 md:hidden">
          <h3 class="font-semibold">Om oss</h3>
          <p>Kort om Luceria</p>
          <!-- <p class="py-1">Historian</p> -->
        </div>
        <div class="hidden logo-without-lines md:flex md:flex-1">
          <img
            src="@/assets/luceria-logo.svg"
            alt="luceria-svg-logo"
            class="w-[150px] bg-white logo"
          />
        </div>
        <div id="footer-contact" class="py-5 md:flex-1 md:border-b-[1px]">
          <h3 class="font-semibold">Kontakt</h3>
          <p>Kontakta oss</p>
          <!-- <p class="py-1">FAQ</p> -->
        </div>
      </div>
      <div class="flex logo-with-lines md:hidden">
        <img
          src="@/assets/luceria-logo.svg"
          alt="luceria-svg-logo"
          class="w-[150px] bg-white logo"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FooterSection',
});
</script>
<style lang="scss" scoped>
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

.logo {
  /* Style your logo here */
  z-index: 1; /* Ensures logo is above the lines */
}

.logo-without-lines {
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>
