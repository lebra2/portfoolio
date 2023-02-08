<template>
  <div class="flex px-6 py-4 z-50 justify-between items-center font-['Jetbrains'] fixed bg-black w-full">
    <div class="text-xl font-medium text-white">
      <h1 class="text-4xl">Markus</h1>
    </div>
    <nav class="lg:flex hidden sticky">
      <router-link to="/">
        <h1 class="relative block px-4 py-2 text-white -inset-0 hover:text-black hover:-skew-y-3 hover:bg-yellow-300" href="#">Home</h1>
    </router-link>
    
    <a class="relative block px-4 py-2 text-white hover:text-black -inset-0 hover:-skew-y-3 hover:bg-yellow-300" href="https://www.lebra.ee/">Muusika</a>
    <a class="relative block px-4 py-2 text-white hover:text-black -inset-0 hover:-skew-y-3 hover:bg-yellow-300" href="#projektid">Projektid</a>
    <a class="relative block px-4 py-2 text-white hover:text-black -inset-0 hover:-skew-y-3 hover:bg-yellow-300" href="#minust">Minust</a>
    <a class="relative block px-4 py-2 text-white hover:text-black -inset-0 hover:-skew-y-3 hover:bg-yellow-300" href="#kontakt">Kontakt</a>
  
    </nav>
    <button class="lg:hidden flex text-white focus:outline-none " @click="isOpen = !isOpen">
      <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828z"/>
      </svg>
    </button>
  </div>
  <nav class="pt-24 p-2 font-['Jetbrains'] lg:hidden" v-if="isOpen">
    <router-link to="/">
        <h1 class="block px-4 py-2 text-white hover:bg-gray-800" href="">Kodu</h1>
    </router-link>
    <router-link to="/Disko" class="block px-4 py-2 text-white hover:bg-gray-800" href="">Muusika</router-link>
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="#projektid">Projektid</a>
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="#minust">Minust</a>
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="#kontakt">Kontakt</a>

    
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
