<template>
  <div :class="['flex flex-col gap-2 p-4', isCheckbox ? 'items-start' : '']">
    <label :for="`${type}-input`">{{ label }}</label>
    <input
      v-model="inputValue"
      :class="['p-2 border rounded-md border-w-2', isCheckbox ? 'ms-4' : '']"
      :id="`${type}-input`"
      :type="getInputType()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  name: 'InputComponent',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: 'label',
    },
  },
  setup(props, { emit }) {
    const { type, label } = props;

    // REFS
    const inputValue = ref('');

    // METHODS
    const getInputType = () => {
      switch (type) {
        case 'email':
          return 'email';
        case 'boolean':
          return 'checkbox';
        case 'number':
          return 'number';

        default:
          return 'text';
      }
    };

    const isCheckbox = type === 'boolean';

    // WATCHERS

    watch(inputValue, (newValue) => {
      emit('input', { type: label, value: newValue });
    });

    return {
      getInputType,
      isCheckbox,
      inputValue,
    };
  },
});
</script>
