<template>
  
    <div id="kontakt" class="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-24">
        <form class=" text-white font-['Jetbrains'] rounded-lg" @submit.prevent="handleSubmit">
            <h2 class="text-2xl font-medium text-center">Kribame</h2>
            <div class="mb-4">
              <label class="block font-medium mb-2" for="name">
                Nimi
              </label>
              <input
                class="border bg-black bg-opacity-25 w-full border-gray-400 p-2 "
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
                class="border bg-black bg-opacity-25 w-full border-gray-400 p-2 "
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
                class="border bg-black bg-opacity-25 w-full border-gray-400 p-2 h-32"
                id="message"
                v-model="message"
              />
            </div>
            <button class="bg-green-300 hover:bg-indigo-600 text-black py-2 px-4 rounded" type="submit">
              Saada
            </button>
            <p v-if="submitted" class="text-center mt-4 text-indigo-500">Saadetud</p>
          </form>
          <div class="text-white font-['Jetbrains'] rounded-lg">
            <h1 class="text-5xl text-center">lebra</h1>
            <h2 class="text-lg p-8 md:text-xl text-center xl:text-left">Noor Eesti räppartist/produtsent, kelle lood on peamiselt armastusest. <br> Lebra alustas oma muusika avaldamisega 2019. aastal Soundcloudis ning on nüüd jõudnud mitmete tuhandete kuulajateni. <br>
             Lood on üleval nüüdseks platvormidel nagu Spotify, Youtube, Soundcloud, Apple Music, Deezer ja mujal.</h2>
             <div class="flex justify-center pb-24 ">
              <div class="">
                  <a href="https://open.spotify.com/artist/70PCvEt9nvUsGdQQCjF1re?si=0Sc4UYlIRXSgHlpupE0KHA"><img class="w-12 p-2 h-12" src="../assets/Pictures/spotify.png" alt=""></a>
              </div>
              <div class="">
                  <a href="https://www.instagram.com/_lebra_/"><img class="w-12 p-2 h-12" src="../assets/Pictures/instagram.png" alt=""></a>
              </div>
              <div class="">
                  <a href="https://www.tiktok.com/@lebraofficial"><img class="w-12 p-2 h-12" src="../assets/Pictures/tik-tok.png" alt=""></a>
              </div>
              <div class="">
                  <a href="https://soundcloud.com/lebraofficial?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"><img class="w-12 p-2 h-12" src="../assets/Pictures/soundcloud.png" alt=""></a>
              </div>
              <div class="">
                  <a href="https://www.youtube.com/channel/UCM6xFVWK2ARMtvBPvEMho9w"><img class="w-12 p-2 h-12" src="../assets/Pictures/youtube.png" alt=""></a>
              </div>
          </div>
        </div>
        
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
  