<template>
    <nav>
        <div class="text-white font-['South'] underline italic justify-around font-bold p-8 md:text-3xl gap-6 flex">
            <a href="https://www.lebra.ee/" class="">MUUSIKA</a>
            <a href="#projektid">PROJEKTID</a>
            <a href="#lingid">LINGID</a>
            <router-link :to="{ path: '/Contact', query: { state: 0 }}" class=""><PhoneIcon class=""/>KONTAKT</router-link>
            
        </div>
    </nav>
</template>
