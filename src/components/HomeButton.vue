<script setup>
let expanded = false;
function expandMenu() {
    if(!expanded) {
        expanded = true;
        document.getElementById('gameLink').style.top = '3.5rem';
        document.getElementById('homeLink').style.top = '6.75rem';
        document.getElementById('audioLink').style.top = '10rem';
    } else {
        expanded = false;
        document.getElementById('gameLink').style.top = '0.25rem';
        document.getElementById('homeLink').style.top = '0.25rem';
        document.getElementById('audioLink').style.top = '0.25rem';
    }
}
</script>

<template>
    <button v-on:click="expandMenu()" class="menuButtons" style="z-index: 50;">
        <img src="../assets/Pictures/more.png" class="" alt="">
    </button>
    <router-link to="/" id="homeLink" class="menuButtons" style="z-index: 49;">
        <img src="../assets/Pictures/portfolio.png" class="" alt="">
    </router-link>
    <router-link to="/" id="gameLink" class="menuButtons" style="z-index: 48;">
        <img src="../assets/Pictures/home.png" class="" alt="">
    </router-link>
    <router-link to="/" id="audioLink" class="menuButtons" style="z-index: 47;">
        <img src="../assets/Pictures/music-note.png" class="" alt="">
    </router-link>
</template>