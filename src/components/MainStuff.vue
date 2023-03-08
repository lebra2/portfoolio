<template>
    <div class="font-['Jetbrains'] h-screen flex flex-col justify-center items-center px-8 ">
        <div class=" h-full pt-12">
            <img class="fixed image h-screen w-screen scale-200 -z-50" src="../assets/Pictures/kiilakas.jpg" alt="" style="object-fit: cover; filter: brightness(1) blur(5px) saturate(0.5);">
  
            <div class="flex border-4 justify-center items-center">
                <a class="" href="https://open.spotify.com/album/449Zm5tF0XMRI5Rz6EBmJ3?si=r534OT6eSmW_syQM8yntsQ" target="_blank"><img class="w-[32rem] lg:w-[60vh] lg:h-[60vh]" src="../assets/Pictures/usaldus.png" alt="" style="object-fit:cover"></a>
            </div>
            <div class="gap-2 text-white text-2xl flex justify-center flex-col items-center">
                <h1 class="text-3xl mt-4 text-second">Mis On Usaldus?</h1>
                <h2 class="font-extrabold text-6xl text-center">UP NOW</h2>
            </div>
            <div class="gap-4 p-4 text-white text-xl flex xl:flex-row justify-center flex-col items-center">
                <a class="bg-white bg-opacity-5 rounded-md p-1" href="https://open.spotify.com/album/449Zm5tF0XMRI5Rz6EBmJ3?si=r534OT6eSmW_syQM8yntsQ">Spotify</a>
                <a class="bg-white bg-opacity-5 rounded-md p-1" href="https://www.youtube.com/watch?v=MZp_g3Vx_zY">Youtube</a>
            </div>
            <div class="flex justify-center items-center">
                <h1 class="text-white">Lugu usaldusest</h1>
            </div>
        </div>
    </div>

</template>

<style>
.noise::before{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    content: "";
    /* you can control opacity of noise  */
    opacity: .03;  
    z-index: 1000;
    pointer-events: none;
    background: url(noise.gif) ;
}
</style>
  