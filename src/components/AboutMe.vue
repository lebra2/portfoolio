<!-- <template> 

<div class="h-full 2xl:mx-48 2xl:px-48 lg:px-24 lg:mx-24 lg:mt-24 py-4">
<div class="text-left h-full mx-4">
  <div class="lg:mt-8 rounded flex flex-col gap-2 lg:text-center">
      <h1 class="text-7xl lg:text-9xl text-white mt-2 font-['South'] text-center text-shadow-lg">MARKUS</h1>
      <span class="font-['Jetbrains'] text-2xl text-white">Mulle meeldib <b class="text-yellow-300 text-shadow-lg">kood</b>, <b class="text-yellow-300 text-shadow-lg">disain</b> ja <b class="text-yellow-300 text-shadow-lg"> muusika</b></span>
      <p class="text-white lg:text-2xl font-semibold font-['Jetbrains']">Olen 17-aastane noorem tarkvaraarendaja ja õpin Kuressaare Ametikoolis. <br> Peamiselt tegelen <b class="text-vue">Vue JS</b> / <b class="text-tailwind">Tailwindiga.</b> <br class=""> Olen õppinud veel <b class="text-yellow-300">Pythonit,</b> <b class="text-yellow-300">Javascripti,</b> <b class="text-sql">MySQLI,</b> Linuxi Terminali, <b class="text-php">PHP-d.</b>
      <br> Olen iseloomult sõbralik ja õpihimuline. Meeldib meeskonda juhtida ja erinevaid probleeme lahendada. <br>
          Vabal ajal tegelen muusika loomisega ehk räppimise ja instrumentaalide tegemisega. Kasutan enda muusikaga tegemiseks <b class="text-yellow-300">FL Studiot</b> ja mu loovusega saab tutvuda alloleval lingil.</p>
          <a class="text-yellow-300 text-xl font-semibold italic" href="https://www.lebra.ee/">www.lebra.ee</a>

  </div>
  
</div>

</div>
</template> -->

<script>
import SunCalc from "";

export default {
  data() {
    return {
      phase: "",
      moonImage: ""
    };
  },
  mounted() {
    this.updateMoonPhase();
    setInterval(() => {
      this.updateMoonPhase();
    }, 60000);
  },
  methods: {
    updateMoonPhase() {
      const date = new Date();
      const moon = SunCalc.getMoonIllumination(date);
      this.phase = this.getMoonPhase(moon.phase);
      this.moonImage = `https://moon.nasa.gov/system/resources/detail_files/1369_Io_WAc_2048.jpg`;
    },
    getMoonPhase(phase) {
      if (phase < 0.03 || phase > 0.97) return "New Moon";
      if (phase < 0.06) return "Waxing Crescent";
      if (phase < 0.12) return "First Quarter";
      if (phase < 0.18) return "Waxing Gibbous";
      if (phase < 0.22) return "Full Moon";
      if (phase < 0.29) return "Waning Gibbous";
      if (phase < 0.35) return "Third Quarter";
      if (phase < 0.41) return "Waning Crescent";
      return "";
    }
  }
};
</script>
<template>
  <div class="bg-black" :style="{ backgroundImage: `url(${moonImage})` }">
    <div class="h-screen flex items-center justify-center">
      <div class="text-white text-4xl">{{ phase }}</div>
    </div>
  </div>
</template>

<style>
  .bg-black {
    background-color: #333;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
