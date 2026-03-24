<template>
    <section id="hero" class="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <!-- Abstract movement SVG background -->
        <div class="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center">
            <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/w3.org/2000/svg">
                <path fill="#1A1A1A"
                    d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,95.3,-3.1C93.7,11.8,84.7,26.1,75.1,40.1C65.5,54.1,55.4,67.8,42.2,76.5C29,85.2,12.7,88.9,-2.8,92.8C-18.3,96.7,-33,100.8,-45.5,93.4C-58,86,-68.3,67.1,-76.3,50C-84.3,32.9,-90,17.6,-89.2,2.8C-88.4,-12,-81.1,-26.3,-71.4,-37.9C-61.7,-49.5,-49.6,-58.4,-36.8,-66.2C-24,-74,-10.5,-80.7,3.6,-85.7C17.7,-90.7,30.6,-83.6,44.7,-76.4Z"
                    transform="translate(100 100)" />
            </svg>
        </div>

        <div class="max-w-4xl mx-auto text-center z-10 fade-in-section">
            <h1
                class="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6 text-balance">
                Ruch to wspólnota.<br>
                <span class="text-[#D96C4A]">Uczymy się od siebie nawzajem.</span>
            </h1>
            <p class="text-lg md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto text-balance">
                Otwarty kolektyw movementowy. Przyjdź, poprowadź, doświadczaj.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#wydarzenia"
                    class="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] text-white font-medium hover:bg-[#D96C4A] hover:scale-105 transition-all duration-300">
                    Dołącz do treningu
                </a>
                <a href="#misja"
                    class="w-full sm:w-auto px-8 py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] font-medium hover:bg-[#1A1A1A] hover:text-white hover:scale-105 transition-all duration-300">
                    Poznaj naszą misję
                </a>
            </div>
        </div>
    </section>
</template>
