<script setup>

const props = defineProps({
    state: String
})
</script>

<template>
    <div id="Contact" class="h-screen bg-[#080808] text-white font-['Jetbrains'] flex justify-center items-center text-2xl lg:text-4xl flex-col">
        <h1 class="my-8">Kontakteeru</h1>
        <form action="https://tak21timofejev.itmajakas.ee" method="post">
            <div class="">
                <div>
                    <p class="">Nimi</p>
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
    </div>

</template>