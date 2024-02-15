<template>
  <button class="btn">
    <span class="icon-wrapper">
      <svg
        class="icon"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DeleteButton',
});
</script>
<style scoped lang="scss">
.btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: none;
  position: relative;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 5px 0.2px #00000035;
  box-shadow: 1px 1px 5px 0.2px #00000035;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
  transition-delay: 0.2s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: space-between;
}

.btn:hover > .icon-wrapper .icon {
  transform: scale(1.1);
}

.bnt:hover > .icon-wrapper .icon path {
  stroke: black;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  transform: scale(0.9);
  transition: 0.2s linear;
}

.icon path {
  stroke: #000;
  stroke-width: 2px;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;
}
</style>
