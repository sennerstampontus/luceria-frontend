<template>
  <svg
    width="91"
    height="72"
    viewBox="0 0 91 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.83335 72C7.38127 72 5.28214 71.1188 3.53596 69.3563C1.78978 67.5938 0.916687 65.475 0.916687 63V9C0.916687 6.525 1.78978 4.40625 3.53596 2.64375C5.28214 0.88125 7.38127 0 9.83335 0H81.1667C83.6188 0 85.7179 0.88125 87.4641 2.64375C89.2103 4.40625 90.0833 6.525 90.0833 9V63C90.0833 65.475 89.2103 67.5938 87.4641 69.3563C85.7179 71.1188 83.6188 72 81.1667 72H9.83335ZM9.83335 63H81.1667V18H9.83335V63ZM40.8188 56.475L24.9917 40.5L31.4563 33.975L40.8188 43.425L59.5438 24.525L66.0084 31.05L40.8188 56.475Z"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'InterviewIcon',
  props: {
    color: {
      type: String,
      required: false,
      default: 'white',
    },
  },
});
</script>
