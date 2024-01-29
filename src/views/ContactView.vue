<template>
  <div class="m-3">
    <h1 class="m-3 text-xl text-center">Kontakta oss</h1>

    <div class="container flex flex-col gap-2 p-4 border-2 rounded-lg">
      <form
        ref="submitFormRef"
        @submit.prevent="
          () => {
            console.log('Form submitted');
          }
        "
      >
        <div v-for="(input, index) in inputListMock" :key="index">
          <InputComponent
            :type="input.type"
            :label="input.label"
            @input="setFormFields($event)"
          />
        </div>
        <button
          type="submit"
          class="w-full p-2 mt-4 text-white rounded-md bg-primary-blue-dark"
        >
          Skicka
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import InputComponent from '@/components/form/InputComponent.vue';
import { PrismicEmbed } from '@prismicio/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ContactView',
  components: { PrismicEmbed, InputComponent },

  setup() {
    // refs
    const submitFormRef = ref();
    const formfields = ref<Record<string, string>>({});

    if (submitFormRef) {
      console.log('submitFormRef: ', submitFormRef.value);
    }

    // METHODS

    const getContentfulForm = async () => {
      const formObject = await axios.get('http://localhost:3000/api/hello');
      const form = await formObject.data;
      return form;
    };

    const res = getContentfulForm();

    console.log('Form: ', res);

    const setFormFields = (input: { type: string; value: string }) => {
      formfields.value[input.type] = input.value;

      console.log('formfields: ', formfields.value);
    };

    const validateForm = () => {};

    // Assigning reactive properties

    // MOCK DATA

    const formObjectMock = {
      text: 'Förnamn',
      email: 'E-post',
      number: 'Ålder',
      boolean: 'Ja/Nej',
    } as Record<string, string>;

    // Key value pairs
    const inputListMock = Object.keys(formObjectMock).map((key) => {
      return {
        type: key,
        label: formObjectMock[key],
      };
    });

    console.log('inputListMock: ', inputListMock);

    return {
      inputListMock,
      submitFormRef,
      validateForm,
      setFormFields,
    };
  },
});
</script>
