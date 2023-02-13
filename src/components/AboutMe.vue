<template>
  

<svg>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='6.29' 
      numOctaves='6' 
      stitchTiles='stitch'/>
  </filter>
</svg>


  <div class="flex justify-center items-center h-screen" id="noiseFilter">
    <div class="gap-8">
      <div class="rounded gap-2 text-center flex justify-center flex-col">
        <p>Minu nimi on</p>
        
        <h1 class="lg:text-8xl font-semibold text-4xl font-semibold">MARKUS <br> TIMOFEJEV</h1>
        <div class="flex mt-24 justify-center">
          <router-link to="/Projects" class="bg-gray-100 p-2 hover:text-blue-300">Projektid</router-link>
        </div>
      </div>
      
    </div>
  </div>

</template>

