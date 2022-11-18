<script setup>
import Navigation from '../components/Navigation.vue';
import Mainfooter from '../components/Mainfooter.vue';
import MainStuff from '../components/MainStuff.vue';
import Musiccard from '../components/Musiccard.vue';
import MobileLinks from '../components/MobileLinks.vue';
import DropDown from '../components/DropDown.vue';


</script>

<template>
    
    <div>
        <Navigation />
        <DropDown/>
            <MainStuff/>
            <h1 class=" text-white font-bold text-6xl text-center">Muusika</h1>
            <Musiccard/>
            <MobileLinks/>
        <Mainfooter />
    </div>
</template>