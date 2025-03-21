<template>
    <section
        class="wrapper h-full flex flex-col md:flex-row bg-[url('/sm-tlo.jpg')] sm:bg-[url('/tlo.jpg')] bg-no-repeat bg-cover md:bg-[position:50%_25%]">
        <div class="md:w-1/2" />
        <div class="md:w-1/2 h-full pt-20 flex flex-col px-4 md:px-56 text-center text-white">
            <h1 class="text-3xl md:text-5xl font-bold mb-6 md:mb-10">
                Odkryj pełnię ruchu.<br>
                Przekraczaj granice.
            </h1>
            <p class="text-base md:text-lg mb-6 md:mb-8 px-4 md:px-0 font-semibold md:font-normal">
                Jesteśmy społecznością ludzi którzy ćwiczą poprzez eksplorują poprzez odkrywanie możliwości swojego
                ciała na nowo. Nie trzymamy się schematów, bo ciało jest stworzone do ruchu w każdej formie.
                Skaczemy, przemieszczamy, balansujemy, testujemy swoje możliwości i uczymy się od siebie nawzajem.
            </p>
            <p class="text-base md:text-lg mb-8 md:mb-12 font-semibold md:font-normal">
                Przyjdź do nas i zobacz, jak daleko może zaprowadzić Cię ciało, gdy dasz mu przestrzeń do działania.
            </p>
            <UButton class="text-center text-md md:text-xl p-4 md:p-5 uppercase font-bold self-center" to="/practice">
                Dołącz i przekonaj się, <br> co potrafisz 🐒
            </UButton>
        </div>
    </section>
</template>

<style scoped>
.wrapper {
    height: calc(100vh - 82px);
}
</style>