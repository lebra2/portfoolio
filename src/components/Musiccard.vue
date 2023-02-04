<template>
    <div class="h-[100vh] lg:justify-center flex flex-col py-24 items-center lg:px-24 lg:mx-24 2xl:mx-48 2xl:px-48">
        <h1 class="text-white text-4xl">Diskograafia</h1>
      <div class="flex mt-10 gap-4">
        <button class="text-gray-500 font-bold py-2 rounded-full" @click="prevSong">
          <p>Prev</p>
        </button>
        <img :src="currentSong.image" class="w-64 h-64 object-cover rounded-lg"/>
        <button class=" text-gray-500 font-bold py-2 rounded-full" @click="nextSong">
            <p>Next</p>
        </button>
      </div>
      <div class="dropdown mt-10 ">
        <select class="bg-[#212121] text-white border border-gray-400 py-2 px-4" v-model="selectedSongIndex">
          <option v-for="(song, index) in songs" :key="index" :value="index">
            {{ song.title }}
          </option>
        </select>
      </div>
      <p class="text-xl text-second font-medium mt-10">{{ currentSong.title }} ({{ currentIndex + 1 }}/{{ songs.length }})</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch } from 'vue'
  
  export default {
    setup() {
      const songs = [
        { title: 'Mis on usaldus', image: '../assets/Pictures/usaldus.png' },
        { title: 'Ei Saa', image: 'src/assets/Pictures/EiSaa.png' },
        { title: 'Hingekaaslane', image: '../assets/Pictures/hingekaaslane.png' },
        { title: 'Lahti Lasta', image: '../assets/Pictures/lahti.jpg' },
        { title: 'Lõpp', image: '../assets/Pictures/Lõpp(1).png' },
        { title: 'Kui Sind Näen', image: '../assets/Pictures/kuisindnaen.jpg' },
        { title: 'Šedööver', image: '../assets/Pictures/sedööver.png' },
        { title: 'Vöörad', image: '../assets/Pictures/vöörad.png' },
        { title: 'Ajad me ees', image: '../assets/Pictures/ajad.jpg' },
        { title: 'Unistuste Allee', image: '../assets/Pictures/allee.png' },
      ]
      const currentIndex = ref(0)
      const currentSong = ref(songs[currentIndex.value])
      const selectedSongIndex = ref(0)
  
      function prevSong() {
        currentIndex.value = (currentIndex.value + songs.length - 1) % songs.length
        currentSong.value = songs[currentIndex.value]
      }
  
      function nextSong() {
        currentIndex.value = (currentIndex.value + 1) % songs.length
        currentSong.value = songs[currentIndex.value]
      }
  
      watch(() => selectedSongIndex.value, (index) => {
        currentIndex.value = index
        currentSong.value = songs[currentIndex.value]
      })
  
      onMounted(() => {
        currentSong.value = songs[currentIndex.value]
      })
  
      return {
        songs,
        currentIndex,
        currentSong,
        prevSong,
        nextSong,
        selectedSongIndex
      }
    }
  }
  </script>

  
  

  


<!-- <template>
    <div class="flex justify-center text-white items-center flex-col bg-black">
        <div class="md:grid flex flex-col sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="w-[300px] lg:w-[400px]">
                <a class="" href="https://open.spotify.com/album/449Zm5tF0XMRI5Rz6EBmJ3" target="_blank"><img class="flex md:hover:scale-105 trans035 rounded" src="../assets/Pictures/usaldus.png" alt=""></a>
                <div class="">
                    <h1 class="text-center text-3xl font-semibold">Latest single</h1>
                    <h2 class="text-rose-500 text-center text-2xl font-semibold">"Mis on Usaldus?"</h2>
                </div>
            </div>
            <div class="w-[300px] lg:w-[400px]">
                <a class="" href="https://open.spotify.com/track/0NogQwG9HA6qcxzVWg2oO5?si=7bb4c0ae956544e7" target="_blank"><img class="flex md:hover:scale-105 trans035 rounded" src="../assets/Pictures/Mina/EiSaa.png" alt=""></a>
                <div class="">
                    <h1 class="text-center text-3xl font-semibold">Single</h1>
                    <h2 class="text-rose-500 text-center text-2xl font-semibold">"Ei Saa"</h2>
                </div>
            </div>
            <div class="w-[300px] lg:w-[400px]">
                <a class="" href="https://open.spotify.com/album/3R9CciNdvR4nhDE2kahkrY?si=xYMS-OPiRJiJjY3zTjQDxw" target="_blank"><img class="flex md:hover:scale-105 trans035 rounded" src="../assets/Pictures/hingekaaslane.png" alt=""></a>
                <div class="" >
                    <h1 class="text-center text-3xl font-semibold">Single</h1>
                    <h2 class="text-rose-500 text-center text-2xl font-semibold">"Hingekaaslane"</h2>
                </div>
            </div>
            <div class="w-[300px] lg:w-[400px]">
                <a class="" href="https://open.spotify.com/album/3R9CciNdvR4nhDE2kahkrY?si=xYMS-OPiRJiJjY3zTjQDxw" target="_blank"><img class="flex md:hover:scale-105 trans035 rounded" src="../assets/Pictures/lahti.jpg" alt=""></a>
                <div class="" >
                    <h1 class="text-center text-3xl font-semibold">Single</h1>
                    <h2 class="text-rose-500 text-center text-2xl font-semibold">"Lahti Lasta"</h2>
                </div>
            </div>
            <div class="w-[300px] lg:w-[400px]">
                <a class="" href="https://open.spotify.com/album/3R9CciNdvR4nhDE2kahkrY?si=xYMS-OPiRJiJjY3zTjQDxw" target="_blank"><img class="flex md:hover:scale-105 trans035 rounded" src="../assets/Pictures/Lõpp(1).png" alt=""></a>
                <div class="" >
                    <h1 class="text-center text-3xl font-semibold">Single</h1>
                    <h2 class="text-rose-500 text-center text-2xl font-semibold">"Lõpp"</h2>
                </div>
            </div>
            <div class="w-[300px] lg:w-[400px]">
                <a class="" href="https://open.spotify.com/album/3R9CciNdvR4nhDE2kahkrY?si=xYMS-OPiRJiJjY3zTjQDxw" target="_blank"><img class="flex md:hover:scale-105 trans035 rounded" src="../assets/Pictures/kuisindnaen.jpg" alt=""></a>
                <div class="" >
                    <h1 class="text-center text-3xl font-semibold">Single</h1>
                    <h2 class="text-rose-500 text-center text-2xl font-semibold">"Kui Sind Näen"</h2>
                </div>
            </div>
            <div class="w-[300px] lg:w-[400px]">
                <a class="" href="https://open.spotify.com/album/3R9CciNdvR4nhDE2kahkrY?si=xYMS-OPiRJiJjY3zTjQDxw" target="_blank"><img class="flex md:hover:scale-105 trans035 rounded" src="../assets/Pictures/sedööver.png" alt=""></a>
                <div class="" >
                    <h1 class="text-center text-3xl font-semibold">Single</h1>
                    <h2 class="text-rose-500 text-center text-2xl font-semibold">"Šedööver"</h2>
                </div>
            </div>
            <div class="w-[300px] lg:w-[400px]">
                <a class="" href="https://open.spotify.com/album/3R9CciNdvR4nhDE2kahkrY?si=xYMS-OPiRJiJjY3zTjQDxw" target="_blank"><img class="flex md:hover:scale-105 trans035 rounded" src="../assets/Pictures/vöörad.png" alt=""></a>
                <div class="" >
                    <h1 class="text-center text-3xl font-semibold">Single</h1>
                    <h2 class="text-rose-500 text-center text-2xl font-semibold">"Vöörad"</h2>
                </div>
            </div>
            <div class="w-[300px] lg:w-[400px]">
                <a class="" href="https://open.spotify.com/album/3R9CciNdvR4nhDE2kahkrY?si=xYMS-OPiRJiJjY3zTjQDxw" target="_blank"><img class="flex md:hover:scale-105 trans035 rounded" src="../assets/Pictures/ajad.jpg" alt=""></a>
                <div class="" >
                    <h1 class="text-center text-3xl font-semibold">Single</h1>
                    <h2 class="text-rose-500 text-center text-2xl font-semibold">"Ajad me ees"</h2>
                </div>
            </div>
            <div class="w-[300px] lg:w-[400px]">
                <a class="" href="https://open.spotify.com/album/3R9CciNdvR4nhDE2kahkrY?si=xYMS-OPiRJiJjY3zTjQDxw" target="_blank"><img class="flex md:hover:scale-105 trans035 rounded" src="../assets/Pictures/allee.png" alt=""></a>
                <div class="" >
                    <h1 class="text-center text-3xl font-semibold">Single</h1>
                    <h2 class="text-rose-500 text-center text-2xl font-semibold">"Unistuste Allee"</h2>
                </div>
            </div>
        </div>

    </div>

</template> -->

