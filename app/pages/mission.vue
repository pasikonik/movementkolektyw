<template>
    <UContainer class="text-center">
        <section class="max-w-3xl mx-auto pt-12 px-4">
            <h1 class="text-5xl font-bold text-center mb-8">Nasza Misja</h1>

            <div class="flex flex-col md:flex-row items-center mb-12">
                <NuxtImg src="/teamwork.webp" alt="Równość i współpraca" width="96" height="96"
                    class="w-24 h-24 mb-4 mx-auto md:mx-0 md:mr-6" />
                <p class="text-lg text-gray-800"> Jesteśmy grupą pasjonatów ruchu, która praktykuje
                    <strong>movement</strong>. Naszą misją jest stworzenie
                    społeczności, która jest samoorganizującą się jednostką, bez wyznaczonego lidera. Każdy jest równy,
                    każdy ma możliwość prowadzenia zajęć i dzielenia się swoją wiedzą oraz doświadczeniem.
                </p>
            </div>

            <div class="flex flex-col md:flex-row-reverse items-center mb-12">
                <NuxtImg src="/movement.webp" alt="Dostępność" width="96" height="96"
                    class="w-24 h-24 mb-4 mx-auto md:mx-0 md:ml-6" />
                <p class="text-lg text-gray-800">
                    Wierzymy, że rozwój ruchowy to fascynująca, niekończąca się <strong>podróż</strong>. Nasze ciała są
                    niezwykle złożone
                    i
                    odkrywanie ich możliwości traktujemy jak wspaniałą przygodę, pełną nowych odkryć i wyzwań. Dlatego
                    praktykujemy wszechstronny, różnorodny ruch, rozwijając się na wielu płaszczyznach.</p>
            </div>

            <div class="flex flex-col md:flex-row items-center">
                <NuxtImg src="/solidarity.webp" alt="Wszechstronny rozwój ruchowy" width="96" height="96"
                    class="w-24 h-24 mb-4 mx-auto md:mx-0 md:mr-6" />
                <p class="text-lg"> <strong>Równość i dostępność</strong> są fundamentem naszej grupy. Nie czerpiemy
                    korzyści finansowych
                    – zbieramy jedynie
                    fundusze na pokrycie kosztów wynajmu salki. Chcemy, aby każdy, bez względu na swój budżet, mógł do
                    nas
                    dołączyć i wspólnie eksplorować ruch. </p>
            </div>

            <p class="text-xl font-semibold text-center mt-10 px-0 md:px-18">
                Dołącz do nas –
                współtwórzmy razem społeczność, w której
                każdy jest mile widziany! 💙
            </p>

            <NuxtImg class="mx-auto" src="/body-trans-mini.webp" alt="Równość i dostępność" />
        </section>
    </UContainer>
</template>

<script setup>
useSeoMeta({
    title: 'Społeczność Movement - Misja',
    description: 'Wierzymy w ruch bez liderów i barier finansowych. Jesteśmy samoorganizującą się grupą, w której każdy może prowadzić zajęcia. Dołącz i współtwórz z nami!',
})
</script>
