<template>
  <div class="grid w-screen h-screen px-5 container-grad place-content-center">
    <span class="text-2xl text-center text-black font-inter">
      <h1>Hejsan 👋, välkommen till</h1>
      <img
        src="@/assets/logo-clean.svg"
        alt="luceria-logo.svg"
        class="w-1/2 mx-auto"
      />
    </span>
    <div class="flex items-center justify-center gap-3 py-3">
      <p class="text-center">
        För tillfället jobbar vi på hemsidan, kika in lite senare!
      </p>

      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/edc3ab78364175.5ca3009cb66a0.gif"
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
<style scoped>
.container-grad {
  background: linear-gradient(to right, rgb(201, 247, 226), rgb(165, 231, 246));
}
</style>
