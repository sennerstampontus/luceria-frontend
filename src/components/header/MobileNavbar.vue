<template>
  <div class="relative">
    <div id="menu-button">
      <div class="scale-50">
        <label class="bar" for="check">
          <input
            ref="menu-checkbox"
            type="checkbox"
            id="check"
            @change="handleChange"
          />

          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
        </label>
      </div>
      <MenuContent
        :is-menu-open="isMenuOpen"
        :menu-items="[
          {
            name: 'Tjänster',
            link: '/tjanster',
          },
          {
            name: 'Om oss',
            link: '#om-oss',
          },
          {
            name: 'Kontakt',
            link: '#kontakt',
          },
        ]"
        @menu-state="
          (e: boolean) => {
            const el = $refs['menu-checkbox'] as HTMLInputElement;
            el.checked = e;
            isMenuOpen = e;
          }
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import MenuContent from './menu/MenuContent.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'MobileNavbar',
  setup() {
    // REFS
    const isMenuOpen = ref(false);

    //METHODS
    const handleChange = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    return {
      isMenuOpen,
      handleChange,
    };
  },
  components: {
    MenuContent,
  },
});
</script>
<style lang="scss" scoped>
input[type='checkbox'] {
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
}

.bar {
  display: block;
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 40px;
}

.bar span {
  position: absolute;
  width: 45px;
  height: 7px;
  border-radius: 100px;
  display: inline-block;
  transition: 0.3s ease;
  left: 0;
  @apply bg-primary-blue;
}

.bar span.top {
  top: 0;
}

.bar span.middle {
  top: 17px;
}

.bar span.bottom {
  bottom: 0;
}

input[type]:checked ~ span.top {
  transform: rotate(45deg);
  transform-origin: top left;
  width: 48px;
  left: 5px;
}

input[type]:checked ~ span.bottom {
  transform: rotate(-45deg);
  transform-origin: top left;
  width: 48px;
  bottom: -1px;
  box-shadow: 0 0 10px #495057;
}

input[type]:checked ~ span.middle {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
