<template>
    <div class="font-['Amaranth', sans-serif]">
        <nav id="" class=" h-20 md:h-24 sticky top-0 z-50 md:z-1 shadow bg-white bg-opacity-5 shadow md:flex md:items-center md:justify-between">
            <div class="flex flex-row justify-between">
                <div>
                    <a class="cursor-pointer" href="index.html"><h1 class="flex justify-center text-white p-4 text-4xl font-bold sm:pt-0 sm:ml-4">LEBRA</h1></a>

                </div>
                <div class="md:hidden burger text-white trans035 mt-2 ">
                    <i class="text-3xl text-center p-4  md:hidden fas fa-bars"></i>
    
                </div>
            </div>
                <ul id="" class="md:items-center md:flex z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li class="mx-4 my-6 md:my-0">
                        <a href="index.html" class="text-xl hover-underline-animation text-white hover:text-red-600 trans02">Home</a>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <a href="portfolio.html" class="text-xl hover-underline-animation text-white hover:text-red-600 trans02">Portfolio</a>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <a href="music.html" class="text-xl hover-underline-animation text-white hover:text-red-600 trans02">Music</a>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <a href="index.html" class="text-xl hover-underline-animation text-white hover:text-red-600 trans02 line-through">Videos</a>
                    </li>
                    <li class="mx-4 my-6 md:my-0">
                        <a href="index.html" class="text-xl hover-underline-animation text-white hover:text-red-600 trans02 line-through">Merch</a>
                    </li>
                    
                </ul>
        </nav>
    </div>
        
        <div id="nav" class="flex justify-around flex-col text-center overflow-hidden bg-opacity-25 trans035 h-0 md:hidden text-white bg-neutral-700">
            <a class="text-2xl font-semibold text-shdw-light" href="music.html">Music</a>
            <a class="text-2xl font-semibold text-shdw-light" href="portfolio.html"><p class="">Portfolio</p></a>
            <a class="text-2xl font-semibold text-shdw-light" href="index.html">Home</a>
        </div>






        <div class="flex justify-center">
            <div class="flex flex-col">

                <div class=" md:mt-20 mx-auto max-w-7xl">
                    <div class="flex justify-center text-6xl text-white font-extrabold">
                        <h1 class="text-4xl md:mb-12 mt-12 md:mt-0">Minu portfoolio</h1>
                    </div>
                    <div class="text-white font-semibold text-center p-4 m-4 flex flex-col text-2xl">
                        <p class="">Olen 17-aastane noorem tarkvaraarendaja ja õpin Kuressaare Ametikoolis. Oskan juba html-i ja css-iga lihtsamaid veebilehti teha ning olen õppinud veel Pythonit, Javascripti, Mysqli, linuxi terminali jne.
                            Ma arvan et ma olen sõbralik, seltskondlik ja avatud inimene, oskan inimestega suhelda ja leian kiiresti sõpru.
                            Vabal ajal tegelen muusika loomisega ning minu eesmärk on ära õppida tulevikus C++, et teha oma pluginaid, mida müüa.</p>
                    </div>
                    <div class="flex justify-center gap-12 md:ml-4 md:p-4 text-3xl text-white">
                        <a class=" text-white hover:scale-105 hover:text-pink-500" target="_blank" href="https://www.instagram.com/_lebra_/"><i class="fa-brands fa-instagram"></i></a>
                        <a class=" hover:text-spotify" target="_blank" href="https://open.spotify.com/artist/70PCvEt9nvUsGdQQCjF1re?si=1axAQ24-QQGmiRWx_MTscg"><i class="fa-brands fa-spotify"></i></a>
                        <a class=" hover:text-soundcloud" target="_blank" href="https://soundcloud.com/lebraofficial"><i class="fa-brands fa-soundcloud"></i></a>
                        <a class=" hover:text-youtube" target="_blank" href="https://www.youtube.com/channel/UCM6xFVWK2ARMtvBPvEMho9w"><i class="fa-brands fa-youtube"></i></a>
                        <a class=" hover:text-ig" target="_blank" href="https://music.apple.com/us/artist/lebra/1593452957"><i class="fa-brands fa-itunes-note"></i></a>
                    </div>
                </div>
            
            <div class="">
                    <div class="flex lg:px-10 justify-center">
                        <div class="text-center">
                            <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-24 sm:gap-12 p-12">
                                <a class="w-fit" href="projects.html">
                                    <div class="shadow-md rounded-lg flex flex-col trans035 h-[300px] w-64 sm:h-[400px] sm:w-96 text-black hover:scale-105">
                                        <div class="">
                                            <img class="h-[200px] w-[384px] rounded-t-lg" src="Pictures/micki.png" alt="">
                                        </div>
                                        <div class="bg-white h-full p-4 rounded-b-lg">
                                            <h1 class="mb-4 font-bold sm:text-3xl text-2xl md:text-5xl">E-portfoolio</h1>
                                            <p class="sm:hidden text-xl">Esimene projekt</p>
                                            <p class="hidden sm:block text-xl font-semibold">Esimene projekt oli vaja teha portfoolio väljamõeldud tegelasest, meie valitud tegelaseks sai Miki Hiir...</p>
                                        </div>
                                    </div>
                                </a>
                                <a class="w-fit" href="project2.html">
                                    <div class="shadow-md rounded-lg flex flex-col trans035 h-[300px] w-64 sm:h-[400px] sm:w-96 text-black hover:scale-105">
                                        <div class="">
                                            <img class="h-[200px] w-[384px] rounded-t-lg" src="Pictures/Väikekannel.jpg" alt="">
                                        </div>

                                        <div class="bg-white h-full p-4 rounded-b-lg ">
                                            <h1 class="mb-4 font-bold sm:text-3xl text-2xl md:text-5xl">V-Instrument</h1>
                                            <p class="sm:hidden text-xl">Teine projekt</p>
                                            <p class="hidden sm:block text-xl font-semibold">Teine projekt tegime virtuaalse instrumendi, mis oleks juhitav läbi kasutaja...</p>
                                        </div>

                                    </div>


                                </a>
                                <a class="w-fit" href="project3.html">
                                    <div class="shadow-md rounded-lg flex flex-col trans035 h-[300px] w-64 sm:h-[400px] sm:w-96 text-black hover:scale-105">
                                        <div class="">
                                            <img class="h-[200px] w-[384px] rounded-t-lg" src="Pictures/info.png" alt="">
                                        </div>

                                        <div class="bg-white h-full p-4 rounded-b-lg">
                                            <h1 class="mb-4 font-bold sm:text-3xl text-2xl md:text-5xl">Infosüsteemid</h1>
                                            <p class="sm:hidden text-xl">Kolmas Projekt</p>
                                            <p class="hidden sm:block text-xl font-semibold">Kolmas projekt mõtlesime välja riistvara rentimsie äpi ning seejärel hakkasime analüüsima...</p>
                                        </div>

                                    </div>


                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <footer id="footer" class="w-full">
            <div class="bg-neutral-900 text-gray-200 mt-[100px] bottom-0 left-0 md:p-12">
                <div class="max-w-7xl mx-auto py-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-12 lg:p-0">
                        <div class="mb-5">
                            <h4 class="text-2xl pb-4">LEBRA</h4>
                            <p class="text-gray-500">
                                Estonia, Hiiumaa <br>
                                <strong>gmail:</strong> lebrabusiness@gmail.com <br>
                            </p>
                        
                        </div>
    
                        <div class="mb-5">
                            <h4 class="text-xl pb-4">Useful links</h4>
                            <ul class="text-gray-500">
                                <a href="index.html"><li class="pb-4 hover:text-blue-300 trans02">Home</li></a>
                                <a href="music.html"><li class="pb-4 hover:text-blue-300 trans02">Music</li></a>
                            </ul>
                        </div>
                        <div class="mb-5">
                            <h4 class="text-xl pb-4">Merch</h4>
                        </div>
                        
                        <div class="mb-5">
                            <h4 class="text-xl pb-4">Beats</h4>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
</template>