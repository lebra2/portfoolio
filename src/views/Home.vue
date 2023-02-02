<script setup>
import Navigation from '../components/Navigation.vue';
import MainStuff from '../components/MainStuff.vue';
import MobileLinksVue from '../components/MobileLinks.vue';

</script>

<template>
    
    <div>
        <Navigation />
        <div class="md:hidden">
            <HomeButtonVue/>
        </div>
            <MainStuff/>
            <MobileLinksVue/>
        <Mainfooter />
    </div>
</template>