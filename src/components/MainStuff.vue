
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
    <div class="font-['Jetbrains'] h-screen flex flex-col justify-center items-center p-4 ">
        <div class=" h-full pt-24 lg:pt-0">
            <div class="flex justify-center items-center lg:pt-16">
                <a class="" href="https://open.spotify.com/album/449Zm5tF0XMRI5Rz6EBmJ3?si=r534OT6eSmW_syQM8yntsQ" target="_blank"><img class="w-full lg:h-[32rem] md:w-96" src="../assets/Pictures/usaldus.png" alt="" style="object-fit:cover"></a>
            </div>
            <div class="gap-2 text-white text-2xl flex justify-center flex-col items-center">
                <h1 class="text-3xl mt-4 text-second">Mis On Usaldus?</h1>
                <h2 class="font-extrabold text-6xl text-center">UP NOW</h2>
            </div>
            <div class="gap-4 p-4 text-white text-xl flex xl:flex-row justify-center flex-col items-center">
                <a class="bg-white bg-opacity-5 rounded-md p-1" href="https://open.spotify.com/album/449Zm5tF0XMRI5Rz6EBmJ3?si=r534OT6eSmW_syQM8yntsQ">Spotify</a>
                <a class="bg-white bg-opacity-5 rounded-md p-1" href="https://www.youtube.com/watch?v=MZp_g3Vx_zY">Youtube</a>
            </div>

        </div>
    </div>

</template> -->