<script setup>
import Navigation from '../components/Navigation.vue';
import Mainfooter from '../components/Mainfooter.vue';
import HomeButton from '../components/HomeButton.vue';
import ceevee from '../components/ceevee.vue';


</script>

<template>
    <div>
        <Navigation />
        <div class="md:hidden">
            <HomeButton/>
        </div>

        <div class="min-h-[70vh]">
            <ceevee/>
        </div>
        <Mainfooter />
    </div>
</template>