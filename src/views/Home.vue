<script setup>
import Navigation from '../components/Navigation.vue';
import MainStuff from '../components/MainStuff.vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';
import MobileLinks from '../components/MobileLinks.vue';

</script>

<template>
    
    <div class="">
        <div class="bg-black bg-opacity-25">
            <Navigation />
            <MainStuff/>
        </div>
        <div>
            <div class="">
                <About/>
            </div>
            <div class="bg-black bg-opacity-25 px-4 xl:px-64 py-4">
                <Contact/>
                
            </div>
            
        </div>
        <MobileLinks/>



    </div>
</template>