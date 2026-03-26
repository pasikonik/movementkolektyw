<template>
  <div
    class="bg-[#FAFAFA] text-[#1A1A1A] font-['Inter'] antialiased overflow-x-hidden selection:bg-[#D96C4A] selection:text-white">

    <!-- Section 1: Hero -->
    <section id="hero" class="relative min-h-screen flex items-center justify-center pt-20 px-6">
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
          <a href="#zajecia"
            class="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-[#1A1A1A] font-medium hover:border-[#D96C4A] hover:text-[#D96C4A] hover:shadow-sm transition-all duration-300">
            Dołącz do treningu
          </a>
          <a href="#misja"
            class="w-full sm:w-auto px-8 py-4 border border-transparent text-gray-600 font-medium hover:text-[#1A1A1A] transition-all duration-300">
            Poznaj naszą misję
          </a>
        </div>
      </div>
    </section>

    <!-- Section 2: Misja i Wartości -->
    <section id="misja" class="py-24 md:py-40 px-6 md:px-12 bg-[#FAFAFA]">
      <div class="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-24 items-start fade-in-section">
        <div class="md:col-span-5 md:sticky md:top-32">
          <h2 class="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold tracking-tight">Dlaczego to robimy?</h2>
        </div>
        <div class="md:col-span-7 flex flex-col gap-8 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
          <p>
            Movement Kolektyw to przestrzeń stworzona przez pasjonatów dla pasjonatów. Wierzymy, że każdy ma coś cennego
            do przekazania.
          </p>
          <p>
            Nasze zajęcia nie mają jednego mistrza – są prowadzone rotacyjnie przez samych uczestników.
          </p>
          <p class="font-medium text-[#1A1A1A]">
            Nieważne, z jakiej dyscypliny się wywodzisz: taniec, sztuki walki, akrobatyka czy joga. Tutaj łączymy
            kropki.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3: Zajęcia (Format i Cennik) przebudowane -->
    <section id="zajecia" class="py-24 md:py-40 px-6 md:px-12 bg-[#F0F0F0]">
      <div class="max-w-7xl mx-auto">
        <div class="fade-in-section space-y-12 md:space-y-16">

          <!-- Nagłówek + info o terminach -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mb-6">
                Jak wyglądają spotkania?
              </h2>
              <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                Każde spotkanie trwa 1,5 godziny i składa się z 3 do 5 bloków tematycznych
                prowadzonych przez chętnych członków kolektywu. Jesteśmy otwarci na
                wszystkie poziomy zaawansowania.
              </p>
            </div>

            <div class="flex justify-start md:justify-end">
              <div class="bg-white p-8 border-l-4 border-[#D96C4A] shadow-sm rounded-r-xl w-full md:w-auto">
                <p class="uppercase text-sm tracking-widest text-gray-400 font-semibold mb-2">
                  Kiedy się spotykamy
                </p>
                <p class="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                  Wtorki i Czwartki
                </p>
                <p class="text-xl text-[#D96C4A] font-medium mt-1">
                  18:45 – 20:15
                </p>
              </div>
            </div>
          </div>

          <!-- Cennik w 3 kolumnach -->
          <div class="grid md:grid-cols-3 gap-6 lg:gap-8">

            <!-- Karta 1 -->
            <div
              class="flex flex-col justify-between p-8 border border-gray-200 bg-white hover:border-[#D96C4A] hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-xl">
              <div>
                <div class="font-['Space_Grotesk'] text-2xl font-bold mb-2">Pojedyncze wejście</div>
                <div class="text-3xl font-bold text-[#1A1A1A] mb-4">35 <span
                    class="text-base font-normal text-gray-500">PLN</span></div>
              </div>
              <div
                class="text-sm font-medium text-[#D96C4A] bg-[#FAFAFA] py-2 px-3 inline-block rounded border border-gray-100 mt-8 text-center">
                35 PLN / zajęcia
              </div>
            </div>

            <!-- Karta 2 -->
            <div
              class="flex flex-col justify-between p-8 border border-gray-200 bg-white hover:border-[#D96C4A] hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-xl relative overflow-hidden">
              <div>
                <div class="font-['Space_Grotesk'] text-2xl font-bold mb-2">Karnet 1x w tygodniu</div>
                <div class="text-3xl font-bold text-[#1A1A1A] mb-4">70 <span
                    class="text-base font-normal text-gray-500">PLN / mc</span></div>
              </div>
              <div
                class="text-sm font-medium text-[#D96C4A] bg-[#FAFAFA] py-2 px-3 inline-block rounded border border-gray-100 mt-8 text-center">
                17.50 PLN / zajęcia
              </div>
            </div>

            <!-- Karta 3 -->
            <div
              class="flex flex-col justify-between p-8 border-2 border-[#D96C4A] bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-xl relative overflow-hidden">
              <div>
                <div class="font-['Space_Grotesk'] text-2xl font-bold mb-2 text-[#1A1A1A]">Karnet 2x w tygodniu</div>
                <div class="text-3xl font-bold text-[#1A1A1A] mb-4">
                  100 <span class="text-base font-normal text-gray-500">PLN / mc</span>
                </div>
              </div>

              <div
                class="text-sm font-medium text-[#D96C4A] bg-[#FAFAFA] py-2 px-3 inline-block rounded border border-gray-100 mt-8 text-center">
                12.50 PLN / zajęcia
              </div>
            </div>

          </div>

          <!-- Info banner -->
          <div
            class="flex items-start md:items-center gap-3 text-sm font-medium bg-white px-5 py-3 border border-gray-200 rounded-lg text-gray-700 mx-auto w-fit">
            <Icon name="lucide:info" class="text-xl text-[#D96C4A]" />
            <span><strong>Jesteśmy inicjatywą non-profit.</strong> Opłaty w 100% pokrywają koszty sali i sprzętu.</span>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 4: Oś czasu wydarzeń -->
    <section id="wydarzenia" class="py-24 md:py-40 px-6 md:px-12 bg-[#FAFAFA]">
      <div class="max-w-4xl mx-auto fade-in-section">
        <h2 class="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold mb-16 border-b-2 border-gray-200 pb-8">
          Kalendarium warsztatów</h2>

        <div class="relative">
          <!-- Timeline Vertical Line -->
          <div class="absolute left-[7px] top-2 bottom-0 w-[2px] bg-gray-200"></div>

          <div class="space-y-12">

            <!-- Event 1 -->
            <div class="relative pl-8 md:pl-12 group">
              <div
                class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#D96C4A] ring-4 ring-[#FAFAFA] z-10 group-hover:scale-125 transition-transform duration-300">
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-sm font-bold text-gray-500 uppercase tracking-widest">7 listopada 2025</span>
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold">Lokomocja i praca kręgosłupa</h3>
                  <span
                    class="px-3 py-1 bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider rounded">warsztat</span>
                </div>
                <p class="text-lg text-gray-700">Prowadzący: <span class="font-semibold text-[#1A1A1A]">Mikołaj
                    Lira</span></p>
              </div>
            </div>

            <!-- Event 2 -->
            <div class="relative pl-8 md:pl-12 group">
              <div
                class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#D96C4A] ring-4 ring-[#FAFAFA] z-10 group-hover:scale-125 transition-transform duration-300">
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-sm font-bold text-gray-500 uppercase tracking-widest">27 kwietnia 2025</span>
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold">Ciężar, pęd i przestrzeń</h3>
                  <span
                    class="px-3 py-1 bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider rounded">warsztat</span>
                </div>
                <p class="text-lg text-gray-700">Prowadzący: <span class="font-semibold text-[#1A1A1A]">Tomasz
                    Koszan</span></p>
              </div>
            </div>

            <!-- Event 3 -->
            <div class="relative pl-8 md:pl-12 group">
              <div
                class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#D96C4A] ring-4 ring-[#FAFAFA] z-10 group-hover:scale-125 transition-transform duration-300">
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-sm font-bold text-gray-500 uppercase tracking-widest">5 stycznia 2025</span>
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold">4 Filary Ruchu</h3>
                  <span
                    class="px-3 py-1 bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider rounded">warsztat</span>
                </div>
                <p class="text-lg text-gray-700">Prowadzący: <span class="font-semibold text-[#1A1A1A]">Filip
                    Droszcz</span></p>
              </div>
            </div>

            <!-- Event 4 -->
            <div class="relative pl-8 md:pl-12 group">
              <div
                class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#D96C4A] ring-4 ring-[#FAFAFA] z-10 group-hover:scale-125 transition-transform duration-300">
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-sm font-bold text-gray-500 uppercase tracking-widest">16 listopada 2024</span>
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold">Floorwork & Partnerowanie</h3>
                  <span
                    class="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider rounded">warsztat</span>
                </div>
                <p class="text-lg text-gray-500">Prowadzący: <span class="font-semibold">Katarzyna Paluch</span></p>
              </div>
            </div>

            <!-- Event 5 -->
            <div class="relative pl-8 md:pl-12 group">
              <div
                class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#D96C4A] ring-4 ring-[#FAFAFA] z-10 group-hover:scale-125 transition-transform duration-300">
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-sm font-bold text-gray-500 uppercase tracking-widest">1 września 2024</span>
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold">Piknik Ruchowy Cytadela</h3>
                  <span
                    class="px-3 py-1 bg-[#F0F0F0] text-gray-600 text-xs font-bold uppercase tracking-wider rounded">outdoor</span>
                </div>
                <p class="text-lg text-gray-500">Prowadzący: <span class="font-semibold">Movement Kolektyw</span></p>
              </div>
            </div>

            <!-- Event 6 -->
            <div class="relative pl-8 md:pl-12 group">
              <div
                class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#D96C4A] ring-4 ring-[#FAFAFA] z-10 group-hover:scale-125 transition-transform duration-300">
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-sm font-bold text-gray-500 uppercase tracking-widest">25 sierpnia 2024</span>
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold">Soft Acrobatics</h3>
                  <span
                    class="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider rounded">warsztat</span>
                </div>
                <p class="text-lg text-gray-500">Prowadzący: <span class="font-semibold">Lena Skrzypczak</span></p>
              </div>
            </div>

            <!-- Event 7 -->
            <div class="relative pl-8 md:pl-12 group">
              <div
                class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#D96C4A] ring-4 ring-[#FAFAFA] z-10 group-hover:scale-125 transition-transform duration-300">
              </div>

              <div class="flex flex-col gap-2">
                <span class="text-sm font-bold text-gray-500 uppercase tracking-widest">26 maja 2024</span>
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold">Primal Therapy</h3>
                  <span
                    class="px-3 py-1 bg-white border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider rounded">warsztat</span>
                </div>
                <p class="text-lg text-gray-500">Prowadzący: <span class="font-semibold">Maciej Borucz</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Kontakt i Informacje -->
    <section id="kontakt" class="py-24 md:py-40 px-6 md:px-12 bg-white">
      <div class="max-w-4xl mx-auto fade-in-section">
        <div class="grid md:grid-cols-2 gap-12 lg:gap-24">

          <div class="space-y-8">
            <h3 class="font-['Space_Grotesk'] text-2xl font-bold text-[#1A1A1A]">Studio Movement Poznań</h3>

            <a href="https://maps.google.com/?q=Wielka+19/8+Poznań" target="_blank"
              class="flex items-start gap-4 hover:opacity-80 transition-opacity decoration-none">
              <Icon name="lucide:map-pin" class="text-2xl text-[#D96C4A] mt-1 shrink-0" />
              <div class="text-lg text-gray-700 leading-relaxed">
                <p>ul. Wielka 19/8</p>
                <p>61-775 Poznań, Polska</p>
              </div>
            </a>

            <div class="flex items-start gap-4">
              <Icon name="lucide:clock" class="text-2xl text-[#1A1A1A] mt-1 shrink-0" />
              <div class="text-lg text-gray-700 leading-relaxed">
                <p><span class="font-bold text-[#1A1A1A]">Wtorek:</span> 18:45 - 20:15</p>
                <p><span class="font-bold text-[#1A1A1A]">Czwartek:</span> 18:45 - 20:15</p>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <h3 class="font-['Space_Grotesk'] text-2xl font-bold text-[#1A1A1A]">Kontakt elektroniczny</h3>

            <div class="flex items-center gap-4">
              <Icon name="lucide:mail" class="text-2xl text-[#1A1A1A] shrink-0" />
              <a href="mailto:movementkolektyw@gmail.com"
                class="text-lg text-gray-700 hover:text-[#D96C4A] transition-colors">
                movementkolektyw@gmail.com
              </a>
            </div>

            <div class="flex items-center gap-4">
              <Icon name="simple-icons:instagram" class="text-2xl text-[#1A1A1A] shrink-0" />
              <a href="https://www.instagram.com/movement_kolektyw"
                class="text-lg text-gray-700 hover:text-[#D96C4A] transition-colors">
                @movement_kolektyw
              </a>
            </div>

            <div class="flex items-center gap-4">
              <Icon name="simple-icons:facebook" class="text-2xl text-[#1A1A1A] shrink-0" />
              <a href="https://www.facebook.com/movementkolektyw"
                class="text-lg text-gray-700 hover:text-[#D96C4A] transition-colors">
                @movementkolektyw
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { public: { siteUrl } } = useRuntimeConfig()

useSeoMeta({
  title: 'Movement Kolektyw - Społeczność, Treningi i Warsztaty | Poznań',
  description: 'Szukasz zajęć Movement w Poznaniu? Dołącz do Movement Kolektyw. Rozwijaj ciało poprzez naturalny ruch, mobility, akrobatykę i siłę. Sprawdź grafik zajęć i trenuj z nami!',
  ogTitle: 'Movement Kolektyw - Dołącz do społeczności ruchu',
  ogDescription: 'Odkryj możliwości swojego ciała. Treningi grupowe, warsztaty i pasjonaci ruchu w sercu Poznania.',
  ogImage: `${siteUrl}/name.webp`,
  ogUrl: siteUrl,
  ogType: 'website',
  ogLocale: 'pl_PL',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;600;700&display=swap' }
  ],
  htmlAttrs: {
    class: 'scroll-smooth'
  }
})

onMounted(() => {
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observerInstance.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })

  setTimeout(() => {
    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section)
    })
  }, 100)
})
</script>

<style scoped>
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  visibility: hidden;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, visibility;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: none;
  visibility: visible;
}
</style>