<template>
    <section class="wrapper relative h-full flex flex-col md:flex-row isolate overflow-hidden">
        <!-- Background Image with LCP optimization -->
        <NuxtImg
            src="/tlo.webp"
            alt="Hero background"
            class="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_25%]"
            sizes="100vw sm:100vw md:100vw"
            quality="80"
            format="webp"
            preload
            fetchpriority="high"
        />

        <!-- Dark Gradient Overlay for readability -->
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        <div class="md:w-1/2" />
        <div class="md:w-1/2 h-full pt-12 flex flex-col px-4 lg:px-32 text-center text-white z-10 justify-center">
            <h1 class="text-3xl md:text-4xl font-bold mb-6 md:mb-10 font-display drop-shadow-md">
                Odkryj pełnię ruchu.<br>
                Przekraczaj granice.
            </h1>
            <p class="text-base md:text-md mb-6 md:mb-8 px-4 md:px-0 font-semibold md:font-normal drop-shadow-sm">
                Jesteśmy społecznością ludzi, którzy eksplorują i odkrywają możliwości swojego ciała na nowo. Nie
                trzymamy się schematów, bo ciało jest stworzone do ruchu w każdej formie. Skaczemy, przemieszczamy się,
                balansujemy, testujemy swoje możliwości i uczymy się od siebie nawzajem.
            </p>
            <p class="text-base md:text-md mb-8 md:mb-12 font-semibold md:font-normal drop-shadow-sm">
                Przyjdź do nas i zobacz, jak daleko może zaprowadzić Cię ciało, gdy dasz mu przestrzeń do działania.
            </p>
            <UButton size="xl" color="neutral" variant="solid" class="text-center md:text-xl p-4 md:p-5 uppercase font-bold self-center shadow-lg transition-transform hover:scale-105 bg-white text-black hover:bg-gray-100" to="/practice">
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