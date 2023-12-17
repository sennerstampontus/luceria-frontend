<template>
  <ul
    v-if="isMenuOpen"
    class="absolute w-auto text-white rounded-md top-10 right-8 bg-primary-blue"
  >
    <li
      v-for="(item, index) in menuItems"
      :key="item.name"
      :class="[
        'p-3 min-w-[174px] border-b-[1px] border-b-gray-400 hover:bg-primary-blue-dark',
        index === 0 ? 'rounded-t-md' : '',
        index === menuItems.length - 1 ? 'rounded-b-md' : '',
      ]"
    >
      <a :href="item.link">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type MenuItem = {
  name: string;
  link: string;
};

export default defineComponent({
  name: 'MenuContent',

  props: {
    menuItems: {
      type: Array as () => MenuItem[],
      required: true,
    },
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
