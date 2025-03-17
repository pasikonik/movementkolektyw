<template>
    <section class="wrapper relative bg-gray-900 text-white py-24 px-6 flex items-center justify-center">
        <div class="max-w-4xl text-center">
            <h1 class="text-4xl sm:text-6xl font-bold tracking-tight">
                Odkryj pełnię ruchu.<br> Przekraczaj granice.
            </h1>
            <p class="mt-6 text-lg sm:text-xl">
                Jesteśmy społecznością ludzi którzy ćwiczą poprzez eksplorują poprzez odkrywanie możliwości swojego ciała
                na nowo. Nie trzymamy się schematów, bo ciało
                jest stworzone do ruchu w każdej formie. Skaczemy, przemieszczamy, balansujemy, testujemy swoje możliwości i
                uczymy się od siebie nawzajem.
            </p>
            <p class="mt-6 text-lg sm:text-xl">
                Przyjdź do nas i zobacz, jak daleko może zaprowadzić Cię ciało, gdy dasz mu przestrzeń do działania.
            </p>
            <div class="mt-8 flex justify-center gap-4">
                <UButton class="p-5 text-xl font-bold" to="/practice">Dołącz i przekonaj się, co potrafisz 🐒</UButton>
            </div>
        </div>
    </section>
</template>

<script setup>
// Brak logiki – czysto prezentacyjny komponent "Hero"
</script>

<style scoped>
.wrapper {
    background: url('/photo-1.jpg') no-repeat center/cover;
    min-height: calc(100vh - 82px);
}
</style>