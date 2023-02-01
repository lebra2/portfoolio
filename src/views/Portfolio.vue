<script setup>
import Navigation from '../components/Navigation.vue';
import Mainfooter from '../components/Mainfooter.vue';
import AboutMe from '../components/AboutMe.vue';
import Projects from '../components/Projects.vue';
import HomeButton from '../components/HomeButton.vue';
import MobileLinks from '../components/MobileLinks.vue';


</script>

<template>
    <div>
        <Navigation />
        <div class="md:hidden">
            <HomeButton/>
        </div>

        <div class="lg:h-screen">
            <AboutMe/>
            <div class="lg:h-screen">
                <Projects/>
            </div>
            <div class="lg:h-screen">
                <MobileLinks/>
            </div>


        </div>
        <Mainfooter />
    </div>
</template>