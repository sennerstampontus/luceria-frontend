<template>
  <div class="grid my-5 place-items-center">
    <h1 class="my-4">CV Granskning</h1>

    <hr class="my-2" />

    <form @submit.prevent="submitForm" class="form">
      <p class="py-2 form-title">Skicka information</p>
      <div class="input-container">
        <input
          v-model="data.name"
          type="text"
          placeholder="För-efternamn*"
          required
        />
        <span> </span>
      </div>
      <div class="input-container">
        <input
          v-model="data.email"
          type="email"
          placeholder="e-postaddress*"
          required
        />
        <span> </span>
      </div>
      <h2 class="my-3">Vad vill du hjälp med?</h2>
      <hr class="my-6" />
      <div class="container flex-col flex-wrap mb-5 md:flex-row">
        <label>
          <input
            ref="radio-design"
            type="radio"
            name="radio"
            :checked="selectedRadio['radio-design']"
            @change="setRadioValue(0)"
          />
          <span>Omdesign på hela CVt</span>
        </label>
        <label>
          <input
            ref="radio-review"
            type="radio"
            name="radio"
            :checked="selectedRadio['radio-review']"
            @change="setRadioValue(1)"
          />
          <span>Allmän CV-granskning</span>
        </label>
      </div>
      <div>
        <UploadComponent
          :file="data.file!"
          @selected-file="setFile"
          @remove-file="data.file = null"
        />
      </div>
      <button type="submit" class="submit font-lora">Skicka</button>
      <p class="py-6 text-red-400">{{ error }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import UploadComponent from '@/components/form/utils/UploadComponent.vue';
import { MailService } from '@sendgrid/mail';
import axios from 'axios';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'FormsView',
  components: { UploadComponent },

  setup() {
    const data = ref({
      name: '',
      email: '',
      type: '',
      file: null as File | null,
    });

    const error = ref('');
    const selectedRadio = {} as Record<string, boolean>;

    const setRadioValue = (type: number) => {
      switch (type) {
        case 0:
          data.value.type = 'Omdesign på hela CVt';
          selectedRadio['radio-review'] = false;
          selectedRadio['radio-design'] = true;
          break;
        case 1:
          data.value.type = 'Allmän CV-granskning';
          selectedRadio['radio-design'] = false;
          selectedRadio['radio-review'] = true;
          break;
        default:
          break;
      }
    };

    const setFile = (file: File) => {
      data.value.file = file;
    };
    const clearForm = () => {
      data.value.name = '';
      data.value.type = '';
      data.value.file = null;
      selectedRadio['radio-design'] = false;
      selectedRadio['radio-review'] = false;
    };

    const fileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
      });
    };

    const submitForm = async () => {
      if (data.value.name === '') {
        error.value = 'Fyll i ditt namn';
      } else if (data.value.type === '') {
        error.value = 'Välj vad du vill ha hjälp med';
      } else if (data.value.file === null) {
        error.value = 'Välj en fil i PDF format';
      } else {
        error.value = '';

        const base64string = await fileToBase64(data.value.file);

        console.log('base64String', base64string);

        const formData = new FormData();
        formData.append('name', data.value.name);
        formData.append('email', data.value.email);
        formData.append('message', data.value.type);
        formData.append('file', data.value.file);

        await axios
          .post(`${import.meta.env.VITE_API_URL}/send/form`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            console.log(res);
            clearForm();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    return {
      data,
      error,
      selectedRadio,
      setRadioValue,
      setFile,
      submitForm,
    };
  },
});
</script>
<style scoped lang="scss">
.form {
  background-color: #fff;
  display: block;
  padding: 1rem;
  max-width: 350px;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

.input-container {
  position: relative;
}

.input-container input,
.form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.submit {
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #3d84a8ff;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;

  &:hover {
    background-color: #2f6783;
  }
}

.signup-link {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.signup-link a {
  text-decoration: underline;
}

.container {
  width: 100%;
  display: flex;
}

.container label {
  display: flex;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.375em;
}

.container label input {
  position: absolute;
  left: -9999px;
}

.container label input:checked + span {
  background-color: #0f354c;
  color: white;
}

.container label input:checked + span:before {
  box-shadow: inset 0 0 0 0.4375em #00005c;
}

.container label span {
  display: flex;
  align-items: center;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  transition: 0.25s ease;
  color: #414181;
}

.container label span:hover {
  background-color: #d6d6e5;
}

.container label span:before {
  display: flex;
  flex-shrink: 0;
  content: '';
  background-color: #fff;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin-right: 0.375em;
  transition: 0.25s ease;
  box-shadow: inset 0 0 0 0.125em #0f354c;
}
</style>
