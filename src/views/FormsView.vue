<template>
  <ResumeForm v-if="currentRoute.includes('cv')" />
  <InterviewForm v-else />
</template>

<script lang="ts">
import UploadComponent from '@/components/form/utils/UploadComponent.vue';
import LoadingSpinner from '@/components/utils/LoadingSpinner.vue';
import ResumeForm from '@/components/form/ResumeForm.vue';
import InterviewForm from '@/components/form/InterviewForm.vue';
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'FormsView',
  components: { UploadComponent, LoadingSpinner, ResumeForm, InterviewForm },

  setup() {
    const route = useRoute();

    const currentRoute = computed(() => route.path);

    return {
      currentRoute,
    };
  },
});
</script>
