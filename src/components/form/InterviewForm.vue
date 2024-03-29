<template>
  <div class="grid my-5 place-items-center">
    <h1 class="my-4">Boka testintervju</h1>

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
      <hr class="my-6" />
      <h2 class="my-3">Vilken typ av tjänst har du sökt?*</h2>
      <div class="input-container">
        <input
          v-model="data.appliedFor"
          type="text"
          placeholder="Webbutvecklare"
          required
        />
      </div>
      <h2 class="my-3">Vilket företag har du sökt till?</h2>
      <div class="input-container">
        <input
          v-model="data.company"
          type="text"
          placeholder="Lämna blank om du inte vill/får nämna"
          class="placeholder:text-xs"
        />
      </div>
      <h2 class="my-3">Eventuell intervju teknik som används</h2>
      <div class="input-container">
        <input
          v-model="data.technique"
          type="text"
          placeholder="Lämna blank om du inte inte vet"
          class="placeholder:text-xs"
        />
      </div>
      <hr class="my-6" />

      <h2 class="my-3">Önskad tid för testintervju</h2>
      <div class="input-container">
        <input v-model="data.datetime" type="datetime-local" />
      </div>
      <template v-if="!isSending">
        <button type="submit" class="submit font-lora">Skicka</button>
      </template>
      <template v-else>
        <button disabled class="submit-spinner font-lora">
          <LoadingSpinner style="scale: 0.8" />
        </button>
      </template>
      <p class="py-6 text-red-400">{{ error }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import UploadComponent from '@/components/form/utils/UploadComponent.vue';
import LoadingSpinner from '@/components/utils/LoadingSpinner.vue';
import { getJwtToken } from '@/api/token';
import axios from 'axios';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'ResumeForm',
  components: { UploadComponent, LoadingSpinner },

  setup() {
    const data = ref({
      name: '',
      email: '',
      appliedFor: '',
      company: '',
      technique: '',
      datetime: '',
    });

    const isSending = ref(false);
    const error = ref('');
    const selectedRadio = {} as Record<string, boolean>;

    const clearForm = () => {
      data.value.name = '';
      data.value.email = '';
      data.value.appliedFor = '';
      data.value.company = '';
      data.value.technique = '';
      data.value.datetime = '';
      selectedRadio['radio-design'] = false;
      selectedRadio['radio-review'] = false;
    };

    const submitForm = async () => {
      isSending.value = true;
      if (data.value.name === '') {
        error.value = 'Fyll i ditt namn';
        isSending.value = false;
      } else if (data.value.appliedFor === '') {
        error.value = 'Fyll i vilken tjänst du sökt';
        isSending.value = false;
      } else if (data.value.datetime === '') {
        error.value = 'Fyll i önskad tid för testintervju';
        isSending.value = false;
      } else {
        error.value = '';

        const form = {
          name: data.value.name,
          email: data.value.email,
          appliedFor: data.value.appliedFor,
          company: data.value.company,
          technique: data.value.technique,
          datetime: data.value.datetime,
        };

        try {
          const token = await getJwtToken();

          try {
            await axios.post(
              `${
                import.meta.env.VITE_API_URL
              }/send/form?formType=TESTINTERVIEW`,
              form,
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              },
            );
          } catch (err) {
            console.error(err, "Couldn't send the form");
            isSending.value = false;
          }
        } catch (err) {
          console.error(err, "Couldn't get the token");
        } finally {
          clearForm();
          isSending.value = false;
        }
      }
    };

    return {
      data,
      isSending,
      error,
      selectedRadio,
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

.submit-spinner {
  display: flex;
  justify-content: center;

  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: rgb(131, 138, 142);
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
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
