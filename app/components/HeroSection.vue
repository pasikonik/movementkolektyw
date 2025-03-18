<template>
    <div class="wrapper relative">
        <div class="flex justify-between p-8">
            <h1 class="w-1/2 mt-10 text-4xl sm:text-6xl font-bold tracking-tight text-center">
                Odkryj pełnię ruchu.<br> Przekraczaj granice.
            </h1>

            <div class="w-1/2 px-45 mt-16 text-lg sm:text-xl text-center">
                <p>
                    Jesteśmy społecznością ludzi którzy ćwiczą poprzez eksplorują poprzez odkrywanie możliwości swojego
                    ciała na nowo. Nie trzymamy się schematów, bo ciało jest stworzone do ruchu w każdej formie.
                    Skaczemy, przemieszczamy, balansujemy, testujemy swoje możliwości i uczymy się od siebie nawzajem.
                </p>
                <br>
                <p>
                    Przyjdź do nas i zobacz, jak daleko może zaprowadzić Cię ciało, gdy dasz mu przestrzeń do działania.
                </p>
            </div>

        </div>


        <UButton class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 text-xl font-bold border-2"
            to="/practice" variant="outline">
            Dołącz i przekonaj się, co potrafisz 🐒
        </UButton>
    </div>
</template>

<style scoped>
.wrapper {
    background: url('/tlo.jpg') no-repeat center/cover;
    min-height: calc(100vh - 82px);
}
</style>