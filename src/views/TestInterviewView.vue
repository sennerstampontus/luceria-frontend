<template>
  <div class="container flex flex-col justify-center my-7 h-max">
    <div class="md:flex md:justify-between md:w-full md:my-6 md:items-center">
      <div>
        <h2
          class="container p-2 mt-3 mb-1 text-xl text-center rounded-t-lg text-luce-white art-background"
        >
          Testintervju
        </h2>

        <div
          class="max-w-sm p-3 px-6 shadow-md rounded-b-md bg-rect-blue text-luce-white"
        >
          <h3 class="my-3 font-semibold">Testintervju:</h3>
          <p>
            Ska du snart på intervju och känner är lite osäker? Boka din
            testintervju här!
          </p>
          <ul class="list-disc">
            <h2>Vad vi hjälper dig med:</h2>
            <li>Känna dig säker inför din intervju</li>
            <li>
              Du kommer att få feedback på vad du behöver tänka på inför din
              riktiga intervju
            </li>
            <li>Att besvara dina eventuella frågor</li>
          </ul>
        </div>
      </div>
      <div class="max-h-[150px] rounded-md bg-primary-blue hidden md:block">
        <ServiceButton
          button-text="Boka testintervju!"
          :icon="InterviewIcon"
          link-to="/tjanster"
          @click="$router.push('/tjanster/testintervju')"
        />
      </div>
      <div class="my-8">
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
            <li>
              Du kommer att få boka ett tillfälle som passar dig där du vill ta
              din intervju.
            </li>
            <li>
              Du kommer att behöva skicka in i formuläret vilken position samt
              till vilket företag du ska på intervju hos (ifall det inte är
              sekretess).
            </li>
            <li>
              Sedan kommer intervjun att hållas och du kommer få feedback från
              intervjun
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-8 md:hidden" />
    </div>

    <div class="flex items-center justify-center mb-10 md:mb-0 md:hidden">
      <div class="w-3/4">
        <ServiceCard
          :title="'Boka testintervju!'"
          :icon="InterviewIcon"
          icon-color="#fbfafa"
          class="p-2 px-4 rounded-md bg-rect-blue text-luce-white hover:bg-primary-blue-dark hover:cursor-pointer"
          @click="$router.push('/skicka/intervju')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ServiceCard from '@/components/cards/ServiceCard.vue';
import InterviewIcon from '@/_icons/InterviewIcon.vue';
import ServiceButton from '@/components/buttons/ServiceButton.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TestInterviewView',
  components: { ServiceCard, ServiceButton },
  data() {
    return {
      InterviewIcon: InterviewIcon,
    };
  },
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
