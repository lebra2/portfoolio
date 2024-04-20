<template>
  <div
    class="font-['Jetbrains'] h-screen flex flex-col justify-center items-center px-8"
  >
    <div class="h-full pt-12">
      <img
        class="fixed image h-screen w-screen scale-200 -z-50"
        src="../assets/Pictures/kiilakas.jpg"
        alt=""
        style="object-fit: cover; filter: brightness(1) blur(5px) saturate(0.5)"
      />

      <div class="flex justify-center items-center">
        <a
          class=""
          href="https://open.spotify.com/album/40tyVQ37PNFahig66Xb0nx?si=tSZs0_U8Trq6nTYYx53WLA"
          target="_blank"
          ><img
            class="w-[32rem] lg:w-[60vh] lg:h-[60vh]"
            src="../assets/Pictures/INGEL.jpg"
            alt=""
            style="object-fit: cover"
        /></a>
      </div>
      <div
        class="gap-2 text-white text-2xl flex justify-center flex-col items-center"
      >
        <h1 class="text-3xl mt-4 text-second">Ingel</h1>
        <h2 class="font-extrabold text-6xl text-center">ÜLEVAL</h2>
      </div>
      <div
        class="gap-4 p-4 text-white text-xl flex xl:flex-row justify-center flex-col items-center"
      >
        <a
          class="bg-white bg-opacity-5 rounded-md p-1 hover:scale-105 hover:bg-spotify"
          href="https://open.spotify.com/album/40tyVQ37PNFahig66Xb0nx?si=tSZs0_U8Trq6nTYYx53WLA"
          >Spotify</a
        >
        <a
          class="bg-white bg-opacity-5 rounded-md p-1 hover:scale-105 hover:bg-youtube"
          href="https://www.youtube.com/watch?v=mWHaZxgws9I"
          >Youtube</a
        >
      </div>
    </div>
  </div>
</template>
