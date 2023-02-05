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
        <div class="">
            <AboutMe/>
            <div class="">
                <Projects/>
            </div>
            <div class="">
                <MobileLinks/>
            </div>
            <div class="">
                <Contact/>
            </div>


        </div>
    </div>
</template>