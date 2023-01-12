<script setup>
import Navigation from '../components/Navigation.vue';
import Mainfooter from '../components/Mainfooter.vue';
import Musiccard from '../components/Musiccard.vue';
import HomeButtonVue from '../components/HomeButton.vue';

</script>

<template>
    
    <div>
        <Navigation />
        <div class="md:hidden">
            <HomeButtonVue/>
        </div>
        <Musiccard/>
        <Mainfooter />
    </div>
</template>