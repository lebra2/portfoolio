<template>
  <div
    class="flex px-6 py-4 bg-black shadow-md justify-between items-center font-['Jetbrains']"
  >
    <div class="font-medium md:hidden">
      <div class="w-24 invert fill-white">
        <img class="" src="../assets/Pictures/signature(3).png" alt="" />
      </div>
    </div>
    <nav class="hidden lg:flex font-bold text-xl">
      <router-link to="/">
        <h1 class="px-4 text-white" href="#">Home</h1>
      </router-link>
      <a class="text-white" href="#muusika">Muusika</a>
      <a
        class="px-4 text-white"
        href="https://www.youtube.com/channel/UCrTLs2NxHzsAk7x1zkg8LrA"
        >Biidid</a
      >
      <a class="px-4 text-white" href="#minust">Minust</a>
    </nav>
    <div class="hidden lg:flex">
      <div class="">
        <a
          href="https://open.spotify.com/artist/70PCvEt9nvUsGdQQCjF1re?si=0Sc4UYlIRXSgHlpupE0KHA"
          ><img
            class="w-12 h-12 p-2 invert hover:scale-105"
            src="../assets/Pictures/spotify(1).png"
            alt=""
        /></a>
      </div>
      <div class="">
        <a href="https://www.instagram.com/_lebra_/"
          ><img
            class="w-12 h-12 p-2 invert hover:scale-105"
            src="../assets/Pictures/instagram(1).png"
            alt=""
        /></a>
      </div>
      <div class="">
        <a href="https://www.tiktok.com/@lebraofficial"
          ><img
            class="w-12 h-12 p-2 invert hover:scale-105"
            src="../assets/Pictures/tiktok.png"
            alt=""
        /></a>
      </div>
      <div class="">
        <a
          href="https://soundcloud.com/lebraofficial?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          ><img
            class="w-12 h-12 p-2 invert hover:scale-105"
            src="../assets/Pictures/soundcloud-logo.png"
            alt=""
        /></a>
      </div>
      <div class="">
        <a href="https://www.youtube.com/channel/UCM6xFVWK2ARMtvBPvEMho9w"
          ><img
            class="w-12 h-12 p-2 invert hover:scale-105"
            src="../assets/Pictures/youtube(1).png"
            alt=""
        /></a>
      </div>
    </div>
    <button
      class="lg:hidden flex text-white focus:outline-none"
      @click="isOpen = !isOpen"
    >
      <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path
          v-if="!isOpen"
          fill-rule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
        <path
          v-if="isOpen"
          fill-rule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828z"
        />
      </svg>
    </button>
  </div>

  <nav class="py-4 p-2 font-['Jetbrains'] lg:hidden" v-if="isOpen">
    <router-link to="/">
      <h1 class="block px-4 py-2 text-white hover:bg-gray-800" href="">Kodu</h1>
    </router-link>
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="#muusika"
      >Muusika</a
    >

    <a
      class="block px-4 py-2 text-white hover:bg-gray-800"
      href="https://www.youtube.com/channel/UCrTLs2NxHzsAk7x1zkg8LrA"
      >Biidid</a
    >
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="#minust"
      >Spotify</a
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
