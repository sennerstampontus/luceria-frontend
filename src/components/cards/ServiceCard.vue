<template>
  <div
    class="container flex items-center w-full gap-6 md:gap-10 md:grid md:grid-cols-2 md:ps-0 md:pe-0 md:min-h-[150px] hover:cursor-pointer"
  >
    <component :is="icon" :color="iconColor" class="w-[60px] md:col-span-1" />
    <div class="flex-1 md:col-span-6 md:col-start-2">
      <h2
        :class="['font-semibold md:text-lg', `text-${titleColor}`, 'on-hover']"
      >
        {{ title }}
      </h2>

      <p :class="['ps-2 py-1 md:ps-0', `text-${contentColor}`, 'on-hover']">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import CvIcon from '@/_icons/CvIcon.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ServiceCard',
  props: {
    icon: {
      type: Object,
      required: false,
      default: CvIcon,
    },
    iconColor: {
      type: String,
      required: false,
      default: 'white',
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: false,
    },
    titleColor: {
      type: String,
      required: false,
      default: 'white',
    },
    contentColor: {
      type: String,
      required: false,
      default: 'white',
    },
  },
  components: {
    CvIcon,
  },
});
</script>
<style lang="scss" scoped>
.on-hover:hover {
  transition: all 0.2s ease-in-out;
  color: white;
}
</style>
