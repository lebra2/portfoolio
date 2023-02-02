<script setup>
import Navigation from '../components/Navigation.vue';
import AboutMe from '../components/AboutMe.vue';
import Projects from '../components/Projects.vue';
import MobileLinks from '../components/MobileLinks.vue';
import Contact from '../components/Contact.vue';

</script>

<template>
    <div class="">
        <Navigation />
        <div class="lg:h-screen">
            <AboutMe/>
            <div class="lg:h-screen bg-[#101010]">
                <Projects/>
            </div>
            <div class="lg:h-screen bg-[#181818]">
                <MobileLinks/>
            </div>
            <div class="lg:h-screen bg-[#181818]">
                <Contact/>
            </div>


        </div>
    </div>
</template>