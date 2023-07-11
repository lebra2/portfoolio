<template>
  <div class="flex px-6 py-4 justify-between items-center font-['Jetbrains']">
    <div class="text-xl font-medium text-white">
      <h1 class="text-3xl">lebra <a href="https://markus.lebra.ee/" class="text-lg font-medium ">/ Markus</a></h1>
    </div>
    <nav class="lg:flex hidden sticky">
      <router-link to="/">
        <h1 class="px-4 text-white hover:bg-pink-500 hover:-skew-y-3" href="#">Home</h1>
    </router-link>
    <router-link to="/Disko" class="px-4 text-white hover:bg-pink-500 hover:-skew-y-3" href="">Muusika</router-link>
    <a class="px-4 text-white hover:bg-pink-500 hover:-skew-y-3" href="https://www.youtube.com/channel/UCrTLs2NxHzsAk7x1zkg8LrA">Biidid</a>
    <a class="px-4 text-white hover:bg-pink-500 hover:-skew-y-3" href="#minust">Minust</a>
  
    </nav>
    <div class="hidden lg:flex">
        <div class="">
            <a href="https://open.spotify.com/artist/70PCvEt9nvUsGdQQCjF1re?si=0Sc4UYlIRXSgHlpupE0KHA"><img class="w-10 h-10 p-2 invert hover:scale-105" src="../assets/Pictures/spotify(1).png" alt=""></a>
        </div>
        <div class="">
            <a href="https://www.instagram.com/_lebra_/"><img class="w-10 h-10 p-2 invert hover:scale-105 " src="../assets/Pictures/instagram(1).png" alt=""></a>
        </div>
        <div class="">
            <a href="https://www.tiktok.com/@lebraofficial"><img class="w-10 h-10 p-2 invert hover:scale-105 " src="../assets/Pictures/tiktok.png" alt=""></a>
        </div>
        <div class="">
            <a href="https://soundcloud.com/lebraofficial?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"><img class="w-10 h-10 p-2 invert hover:scale-105 " src="../assets/Pictures/soundcloud-logo.png" alt=""></a>
        </div>
        <div class="">
            <a href="https://www.youtube.com/channel/UCM6xFVWK2ARMtvBPvEMho9w"><img class="w-10 h-10 p-2 invert hover:scale-105" src="../assets/Pictures/youtube(1).png" alt=""></a>
        </div>
    </div>
    <button class="lg:hidden flex text-white focus:outline-none " @click="isOpen = !isOpen">
      <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828z"/>
      </svg>
    </button>
  </div>
  
  <nav class="py-4 p-2 font-['Jetbrains'] lg:hidden" v-if="isOpen">
    <router-link to="/">
        <h1 class="block px-4 py-2 text-white hover:bg-gray-800" href="">Kodu</h1>
    </router-link>
    <router-link to="/Disko" class="block px-4 py-2 text-white hover:bg-gray-800" href="">Muusika</router-link>
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="https://www.youtube.com/channel/UCrTLs2NxHzsAk7x1zkg8LrA">Biidid</a>
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="#minust">Minust</a>
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="#kontakt">Kontakt</a>
    <div class="flex justify-center mt-2 pb-8">
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
