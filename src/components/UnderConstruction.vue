<template>
  <div class="grid w-screen h-screen place-content-center">
    <span class="text-2xl text-center text-black font-inter">
      <h1>Hejsan 👋, välkommen till</h1>
      <img
        src="@/assets/luceria-logo.svg"
        alt="luceria-logo.svg"
        class="w-1/2 mx-auto"
      />
    </span>
    <div class="flex items-center justify-center gap-3 py-3">
      <p class="text-center">
        För tillfället jobbar vi på hemsidan, kika in lite senare!
      </p>

      <img
        src="@/assets/lottie-maintenance.gif"
        alt="lottie-maintenance"
        class="w-[80px]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'UnderConstruction',
});
</script>
