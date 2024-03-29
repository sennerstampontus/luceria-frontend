<template>
  <nav>
    <ul
      class="flex justify-between gap-4 items-center h-[65px] px-8 text-black font-lora"
    >
      <li class="link">
        <RouterLink
          :to="{ path: '/', hash: '#hem' }"
          class="router-link-exact-active"
          :class="{ active: isActiveHash('#hem') }"
          :active-class="isActiveHash('#hem') ? 'active' : ''"
          >Hem
        </RouterLink>
      </li>
      <li class="link">
        <RouterLink
          :to="{ path: '/', hash: '#tjanster' }"
          class="router-link-exact-active"
          :class="{ active: isActiveHash('#tjanster') }"
          :active-class="isActiveHash('#tjanster') ? 'active' : ''"
          >Tjänster
        </RouterLink>
      </li>
      <li class="link">
        <RouterLink
          :to="{ path: '/', hash: '#om-oss' }"
          class="router-link-exact-active"
          :class="{ active: isActiveHash('#om-oss') }"
          :active-class="isActiveHash('#om-oss') ? 'active' : ''"
          >Om oss
        </RouterLink>
      </li>
      <li class="link">
        <RouterLink
          :to="{ path: '/', hash: '#kontakt' }"
          class="router-link-exact-active"
          :class="{ active: isActiveHash('#kontakt') }"
          :active-class="isActiveHash('#kontakt') ? 'active' : ''"
          >Kontakt
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'DesktopNavbar',
  setup() {
    const route = useRoute();

    const currentHash = ref('');

    watch(
      () => route.hash,
      (newHash) => {
        currentHash.value = newHash;
      },
    );

    const isActiveHash = (hash: string) => {
      return currentHash.value === hash;
    };
    return {
      isActiveHash,
    };
  },
});
</script>

<style scoped>
.link .router-link-exact-active {
  position: relative;
  display: inline-block;
}

.link .router-link-exact-active::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #2f6783; /* Adjust color as needed */
  transition: width 0.3s ease-in-out;
}

.link:hover .router-link-exact-active::before,
.link .router-link-exact-active.active::before {
  width: 100%;
}

.link:hover,
.router-link-exact-active:active {
  color: #2f6783;
  font-weight: 500;
  transform: scale(1.05);
  transition:
    color 0.3s ease-in-out,
    font-weight 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}
</style>
