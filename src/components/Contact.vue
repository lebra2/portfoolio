<template>
  
    <div id="kontakt" class="flex lg:h-screen flex-col md:grid-cols-2 xl:mx-12 2xl:mx-72 p-4 lg:gap-24">
        <form class="bg-[#181818] text-white p-6 font-['Jetbrains'] rounded-lg shadow-md" @submit.prevent="handleSubmit">
            <h2 class="text-2xl font-medium mb-4 text-center">Kribame</h2>
            <div class="mb-4">
              <label class="block font-medium mb-2" for="name">
                Nimi
              </label>
              <input
                class="border  border-gray-400 p-2 w-full"
                id="name"
                type="text"
                v-model="name"
              />
            </div>
            <div class="mb-4">
              <label class="block font-medium mb-2" for="email">
                Email
              </label>
              <input
                class="border  border-gray-400 p-2 w-full"
                id="email"
                type="email"
                v-model="email"
              />
            </div>
            <div class="mb-4">
              <label class="block font-medium mb-2" for="message">
                Sõnum
              </label>
              <textarea
                class="border  border-gray-400 p-2 w-full h-32"
                id="message"
                v-model="message"
              />
            </div>
            <button class="bg-green-300 hover:bg-indigo-600 text-black py-2 px-4 rounded" type="submit">
              Saada
            </button>
            <p v-if="submitted" class="text-center mt-4 text-indigo-500">Saadetud</p>
          </form>
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
        submitted: false,
      };
    },
    methods: {
      handleSubmit() {
        // Add your form submission logic here, if necessary
        this.submitted = true;
      },
    },
  };
  </script>
  