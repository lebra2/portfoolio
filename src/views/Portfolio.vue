<script setup>
import Navigation from '../components/Navigation.vue';
import AboutMe from '../components/AboutMe.vue';
import Projects from '../components/Projects.vue';
import MobileLinks from '../components/MobileLinks.vue';
import Contact from '../components/Contact.vue';

</script>

<template>
    <div class="font-['Jetbrains']">
        <div class="bg-black bg-opacity-50">
            <Navigation />
            <AboutMe/>
        </div>
        <div class="">
            <div class="">
                <Projects/>
            </div>
            <div class="bg-black bg-opacity-50 h-screen">
                <MobileLinks/>
            </div>
            <div class="">
                <Contact/>
            </div>


        </div>
    </div>
</template>