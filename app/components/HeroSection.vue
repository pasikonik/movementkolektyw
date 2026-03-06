<template>
    <section class="wrapper relative h-full flex flex-col md:flex-row isolate overflow-hidden">
        <!-- Background Image with LCP optimization -->
        <NuxtImg src="/tlo.webp" preload alt="Hero background" fetchpriority="high" loading="eager"
            class="absolute inset-0 -z-20 h-full w-full object-cover object-center"
            sizes="sm:640px md:1024px lg:1920px xl:2560px" quality="80" format="webp" />

        <!-- Dark Gradient Overlay for readability -->
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        <div class="w-full h-full flex items-center justify-center px-4 lg:px-32 z-10">
            <div class="text-center text-white max-w-3xl">
                <h1 class="text-3xl md:text-4xl font-bold mb-6 md:mb-10 font-display drop-shadow-md uppercase">
                    Odkryj pełnię ruchu.<br>
                    Przekraczaj granice.
                </h1>
                <p class="text-base md:text-md mb-6 md:mb-8 px-4 md:px-0 font-semibold md:font-normal drop-shadow-sm">
                    Jesteśmy społecznością ludzi, którzy eksplorują i odkrywają możliwości swojego ciała na nowo. Nie
                    trzymamy się schematów, bo ciało jest stworzone do ruchu w każdej formie. Skaczemy, przemieszczamy
                    się,
                    balansujemy, testujemy swoje możliwości i uczymy się od siebie nawzajem.
                </p>
                <p class="text-base md:text-md mb-8 md:mb-12 font-semibold md:font-normal drop-shadow-sm">
                    Przyjdź do nas i zobacz, jak daleko może zaprowadzić Cię ciało, gdy dasz mu przestrzeń do działania.
                </p>
                <UButton size="xl" color="neutral" variant="solid"
                    class="text-center md:text-xl p-4 md:p-5 uppercase font-bold shadow-lg transition-transform hover:scale-105 bg-white text-black hover:bg-gray-100"
                    to="/practice">
                    Dołącz i przekonaj się, <br> co potrafisz 🐒
                </UButton>
            </div>
        </div>
    </section>
</template>

<style scoped>
.wrapper {
    height: calc(100vh - 82px);
}
</style>