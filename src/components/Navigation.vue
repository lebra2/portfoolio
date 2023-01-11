<template>
    <div class="">
        <nav id="nav" class="sticky bg-black bg-opacity-50 top-0 z-50 md:z-1 md:flex md:items-center md:justify-between">
            <div class="flex flex-row justify-between sticky ">
                <div class="flex font-['South']">
                    <router-link to="/" class="flex text-white p-4 text-4xl font-bold sm:ml-4">
                        LEBRA
                    </router-link>

                </div>
            </div>
                <ul id="" class="sm:mr-4 md:items-center md:flex z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li class="mx-4 my-6 md:my-0">
                        <router-link to="/" class="text-xl hover-underline-animation text-white hover:text-red-600 trans02">
                            Home
                        </router-link>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <router-link to="/Portfolio" class="text-xl hover-underline-animation text-white hover:text-red-600 trans02">
                            Portfolio
                        </router-link>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <a href="music.html" class="text-xl hover-underline-animation text-white hover:text-red-600 trans02">Music</a>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <a href="index.html" class="text-xl hover-underline-animation text-white hover:text-red-600 trans02 line-through">Videos</a>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <a href="index.html" class="text-xl hover-underline-animation text-white hover:text-red-600 trans02">Beats</a>
                    </li>
                    
                </ul>
        </nav>
          

        
    </div>
</template>