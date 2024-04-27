<template>
  <div class="m-3">
    <h1 class="m-3 text-xl text-center">Kontakta oss</h1>

    <div
      class="container flex flex-col gap-2 p-4 border-2 rounded-lg bg-luce-hover-blue text-luce-white"
    >
      <p>
        Vi finns här för dig ifall det är något annat du undrar över som du inte
        hittar på vår hemsida.
      </p>
      <p>Då kan du skicka ett meddelande till oss så återkommer vi.</p>
      <a href="mailto:info@luceria.se" class="text-blue-200">info@luceria.se</a>
      <p class="text-sm">
        Telefon:
        <a href="tel:070 281 45 60" class="font-medium text-blue-200"
          >070 281 45 60</a
        >
      </p>
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
