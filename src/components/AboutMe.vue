<template>
  <div class="flex justify-center items-center">
    <router-link to="/Projects" class="hidden relative mt-24 md:block xl:text-5xl text-2xl font-['Jetbold'] p-1 md:p-4 text-black -inset-0 -skew-y-3 bg-yellow-300 hover:scale-105">Markus</router-link>
  </div>
<div class="flex justify-center 2xl:px-48 px-8 items-center md:mt-16 lg:mt-24">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="flex justify-center items-center mt-24 md:mt-2">
      <img class="lg:scale-105 w-48 sm:w-96 sm:h-96 xl:h-96 rounded-full" src="../assets/Pictures/mina23-min.jpg" alt="">
    </div>
    <div class="rounded gap-2 lg:text-left">
      <h1 class="text-white lg:text-4xl text-3xl font-semibold">Markus Timofejev</h1>
        <span class="text-white lg:text-xl md:text-lg text-sm">Mulle meeldib kood, disain ja muusika</span>
        <p class="text-white lg:text-xl md:text-lg text-sm">Olen 17-aastane noorem tarkvaraarendaja ja õpin Kuressaare Ametikoolis. <br> Peamiselt tegelen <b class="text-yellow-300">Vue JS</b> / <b class="text-yellow-300">Tailwindiga.</b> <br class=""> Olen õppinud veel <b class="text-yellow-300">Pythonit,</b> <b class="text-yellow-300">Javascripti,</b> <b class="text-yellow-300">MySQLI,</b> Linuxi Terminali, <b class="text-yellow-300">PHP-d.</b>
        <br> Olen iseloomult sõbralik ja õpihimuline. Meeldib meeskonda juhtida ja erinevaid probleeme lahendada. <br>
            Vabal ajal tegelen muusika loomisega ehk räppimise ja instrumentaalide tegemisega. Kasutan enda muusikaga tegemiseks <b class="text-yellow-300">FL Studiot</b> ja mu loovusega saab tutvuda "Muusika" alt.</p>
            <div class="flex py-2">
              <router-link to="/Projects" class="rounded-md font-['Jetbold'] mt-2 p-2 text-black hover:text-black bg-yellow-300 hover:scale-105">Projektid</router-link>
            </div>
    </div>
    
  </div>
</div>
</template>

