<template>
  <div class="container flex flex-col justify-center my-7 h-max">
    <h2
      class="container p-2 mt-3 mb-1 text-xl text-center rounded-t-lg text-luce-white art-background"
    >
      Vi hjälper dig!
    </h2>

    <div
      class="max-w-sm p-3 px-6 shadow-md rounded-b-md bg-rect-blue text-luce-white"
    >
      <h3 class="my-3 font-semibold">Saker vi kollar efter i CVt:</h3>
      <ul class="list-disc">
        <li>Har du ett relevant CV för tjänsten du söker?</li>
        <li>Har du ett CV som är lätt att förstå sig på?</li>
        <li>Är ditt CV attraktivt för rekryteraren?</li>
        <h2>Vad vi hjälper dig med:</h2>
        <li>Att designa ett fint och stilrent CV</li>
        <li>
          Tydliggöra eventuella oklarheter i ditt CV som kan missleda en
          rekryterare
        </li>
        <li>
          Vi förenklar ditt CV så det blir lätt att läsa och lätt för en
          rekryterare att navigera i.
        </li>
      </ul>
    </div>
  </div>
  <div class="container flex flex-col justify-center my-7 h-max">
    <h2
      class="container p-2 mt-3 mb-1 text-xl text-center rounded-t-lg text-luce-white art-background"
    >
      Information
    </h2>

    <div
      class="max-w-sm p-3 px-6 shadow-md rounded-b-md bg-rect-blue text-luce-white"
    >
      <h3 class="my-3 font-semibold">Hur går det till?</h3>
      <ul class="list-disc">
        <li>Du skickar in ditt cv och skriver vad du vill ha för hjälp.</li>
        <li>Vi kommer granska det och åtgärda det som du nämnt.</li>
        <li>
          Det kommer ta mellan 1-3 dagar beroende på hur mycket som finns att
          göra.
        </li>
      </ul>
    </div>
  </div>
  <hr class="my-8" />

  <div class="flex items-center justify-center mb-10">
    <div class="w-3/4">
      <ServiceCard
        :title="'Få hjälp med CVt!'"
        icon-color="#fbfafa"
        class="p-2 px-4 rounded-md bg-rect-blue text-luce-white hover:bg-primary-blue-dark hover:cursor-pointer"
        @click="$router.push('/tjanster/cvgranskning')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ServiceCard from '@/components/cards/ServiceCard.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CVReviewView',
  components: { ServiceCard },
});
</script>
<style scoped lang="scss">
.art-background {
  background-image: url('../assets/background-art.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
}
ul li {
  padding: 0.5rem 0;
}
</style>
