<template>
  <div class="container flex items-center w-full gap-6">
    <component :is="icon" :color="iconColor" class="w-[60px]" />
    <div class="flex-1">
      <h2 :class="['font-semibold ', `text-${titleColor}`, 'on-hover']">
        {{ title }}
      </h2>
      <p :class="['ps-2 py-1', `text-${contentColor}`, 'on-hover']">
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
