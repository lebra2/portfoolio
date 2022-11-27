<script setup>
import Navigation from '../components/Navigation.vue';
import Mainfooter from '../components/Mainfooter.vue';
import AboutMe from '../components/AboutMe.vue';
import Projects from '../components/Projects.vue';
import HomeButton from '../components/HomeButton.vue';


</script>

<template>
    <div>
        <Navigation />
        <HomeButton/>
        <div class="min-h-[70vh]">
            <AboutMe/>
            <Projects/>

        </div>
        <Mainfooter />
    </div>
</template>