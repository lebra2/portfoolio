<script setup>

const props = defineProps({
    state: String
})
</script>

<template>
    <div id="Contact" class="h-screen text-white font-['Jetbrains'] flex justify-center text-2xl items-center flex-col">
        <h1 class="my-8 lg:text-4xl">Kirjuta mulle</h1>
        <form action="https://tak21timofejev.itmajakas.ee" method="post">
            <div class="">
                <div>
                    <p class="lg:text-2xl">Nimi</p>
                    <input type="text" name="name" required="required" class="bg-[#282828]">
                </div>
                <div>
                    <p class="">E-Mail</p>
                    <input type="text" name="emanueladdresshaha" required="required" class="bg-[#282828]">
                    <input type="text" name="email" autocomplete="off" class="hidden">
                    <input type="text" name="website" autocomplete="off" class="hidden">
                </div>
                <div>
                    <p class="">Sõnum</p>
                    <textarea name="message" rows="3" spellcheck="false" required="required" class="resize-none bg-[#282828]"></textarea>
                </div>
                <div class="flex justify-center">
                    <button type="submit" name="submit" class="bg-yellow-600 p-2 mt-4 rounded-lg">Submit</button>
                </div>

            </div>
        </form>
        <div class="font-['Jetbrains'] flex mt-4 gap-4 ">
            <h1></h1>
            <div class="rounded-md">
                <img class="w-12 p-2 h-12 bg-white rounded-full" src="../assets/Pictures/github-logo(1).png" alt=""><a href="https://open.spotify.com/artist/70PCvEt9nvUsGdQQCjF1re?si=0Sc4UYlIRXSgHlpupE0KHA"></a>
            </div>
            <div class="rounded-md">
                <img class="w-12 p-2 h-12 bg-white rounded-full" src="../assets/Pictures/github-logo(1).png" alt=""><a href="https://open.spotify.com/artist/70PCvEt9nvUsGdQQCjF1re?si=0Sc4UYlIRXSgHlpupE0KHA"></a>
            </div>
            <div class="rounded-md">
                <img class="w-12 p-2 h-12 bg-white rounded-full" src="../assets/Pictures/github-logo(1).png" alt=""><a href="https://open.spotify.com/artist/70PCvEt9nvUsGdQQCjF1re?si=0Sc4UYlIRXSgHlpupE0KHA"></a>
            </div>
            <div class="rounded-md">
                <img class="w-12 p-2 h-12 bg-white rounded-full" src="../assets/Pictures/github-logo(1).png" alt=""><a href="https://open.spotify.com/artist/70PCvEt9nvUsGdQQCjF1re?si=0Sc4UYlIRXSgHlpupE0KHA"></a>
            </div>
            <div class="rounded-md">
                <img class="w-12 p-2 h-12 bg-white rounded-full" src="../assets/Pictures/github-logo(1).png" alt=""><a href="https://open.spotify.com/artist/70PCvEt9nvUsGdQQCjF1re?si=0Sc4UYlIRXSgHlpupE0KHA"></a>
            </div>
        </div>
    </div>
    


</template>