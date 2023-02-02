<script setup>
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

</script>


<template>
    <!-- <nav>
        <div class="text-white font-['South'] underline italic justify-around font-bold p-8 md:text-3xl gap-6 flex">
            <a href="https://www.lebra.ee/" class="">MUUSIKA</a>
            <a href="#projektid">PROJEKTID</a>
            <a href="#lingid">LINGID</a>
            <router-link :to="{ path: '/Contact', query: { state: 0 }}" class=""><PhoneIcon class=""/>KONTAKT</router-link>
        </div>
    </nav> -->
	<nav class="relative px-4 py-4 flex justify-between items-center text-white">
		<a class="text-3xl font-['South'] font-bold leading-none" href="#">
            LEBRA
		</a>
		<div class="lg:hidden">
			<button class="navbar-burger flex items-center p-3">
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
	</nav>
	<div class="navbar-menu relative z-50 hidden font-['Jetbrains']">
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8">
				<button class="navbar-close">
					<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
                    <router-link to="/">
                        <h1 class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Kodu</h1>
                    </router-link>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#projektid">Projektid</a>
					</li>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="https://www.lebra.ee/">Muusika</a>
					</li>
                    <li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Sotsiaalmeedia</a>
					</li>
                    <router-link to="/Contact">
                        <h1 class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Kontakt</h1>
                    </router-link>
				</ul>
			</div>

		</nav>
	</div>
</template>
