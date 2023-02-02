<template>
  <div class="flex items-center justify-between px-6 py-4">
    <div class="text-xl font-medium text-white">
      <h1 class="font-['Jetbrains'] text-2xl">LEBRA</h1>
    </div>
    <nav class="lg:flex hidden">
      <router-link to="/">
        <h1 class="block px-4 py-2 text-white hover:bg-gray-800" href="#">Home</h1>
    </router-link>
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="#projektid">Projektid</a>
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="#lingid">Lingid</a>
    <router-link to="/Contact">
        <h1 class="block px-4 py-2 text-white hover:bg-gray-800" href="#">Kontakt</h1>
    </router-link>
  
    </nav>
    <button class="lg:hidden text-white focus:outline-none" @click="isOpen = !isOpen">
      <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828z"/>
      </svg>
    </button>
  </div>
  <nav class="py-4 p-2 lg:hidden" v-if="isOpen">
    <router-link to="/">
        <h1 class="block px-4 py-2 text-white hover:bg-gray-800" href="#">Home</h1>
    </router-link>
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="#projektid">Projektid</a>
    <a class="block px-4 py-2 text-white hover:bg-gray-800" href="#lingid">Lingid</a>
    <router-link to="/Contact">
        <h1 class="block px-4 py-2 text-white hover:bg-gray-800" href="#">Kontakt</h1>
    </router-link>

    
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
