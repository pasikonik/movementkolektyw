<template>
  <div
    class="bg-[#FAFAFA] text-[#1A1A1A] font-['Inter'] antialiased overflow-x-clip selection:bg-[#D96C4A] selection:text-white">

    <!-- Section 1: Hero -->
    <section id="hero" class="relative min-h-svh flex flex-col pt-20">
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center" aria-hidden="true">
        <svg v-for="fill in ['#1A1A1A', '#D96C4A']" :key="fill" class="blob" width="800" height="800" viewBox="0 0 200 200">
          <path :fill="fill"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,95.3,-3.1C93.7,11.8,84.7,26.1,75.1,40.1C65.5,54.1,55.4,67.8,42.2,76.5C29,85.2,12.7,88.9,-2.8,92.8C-18.3,96.7,-33,100.8,-45.5,93.4C-58,86,-68.3,67.1,-76.3,50C-84.3,32.9,-90,17.6,-89.2,2.8C-88.4,-12,-81.1,-26.3,-71.4,-37.9C-61.7,-49.5,-49.6,-58.4,-36.8,-66.2C-24,-74,-10.5,-80.7,3.6,-85.7C17.7,-90.7,30.6,-83.6,44.7,-76.4Z"
            transform="translate(100 100)" />
        </svg>
      </div>

      <div class="flex-1 flex items-center justify-center px-6 py-12 z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h1
          class="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6 text-balance">
          <span class="hero-mask"><span class="hero-line">Ruch to wspólnota.</span></span>
          <span class="hero-mask"><span class="hero-line text-[#D96C4A]" :style="{ '--i': 1 }">Uczymy się od siebie nawzajem.</span></span>
        </h1>
        <p class="hero-in text-lg md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto text-balance" :style="{ '--i': 3 }">
          Otwarty kolektyw movementowy. Przyjdź, poprowadź, doświadczaj.
        </p>
        <div class="hero-in flex flex-col sm:flex-row gap-4 justify-center items-center" :style="{ '--i': 4 }">
          <a href="#zajecia"
            class="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-[#1A1A1A] font-medium hover:border-[#D96C4A] hover:text-[#D96C4A] hover:shadow-sm transition-all duration-300">
            Dołącz do treningu
            <Icon name="lucide:arrow-right" class="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#misja"
            class="w-full sm:w-auto px-8 py-4 border border-transparent text-gray-600 font-medium hover:text-[#1A1A1A] transition-all duration-300">
            Poznaj naszą misję
          </a>
        </div>
      </div>
      </div>

      <div class="relative z-10 overflow-hidden border-y border-gray-200 py-5" aria-hidden="true">
        <div class="marquee-track flex w-max">
          <template v-for="n in 4" :key="n">
            <span v-for="word in disciplines" :key="word"
              class="font-['Space_Grotesk'] text-2xl md:text-4xl font-bold uppercase tracking-tight whitespace-nowrap">
              {{ word }}<span class="text-[#D96C4A] mx-6 md:mx-10">/</span>
            </span>
          </template>
        </div>
      </div>
    </section>

    <!-- Section 2: Misja i Wartości -->
    <section id="misja" class="py-24 md:py-40 px-6 md:px-12 bg-[#FAFAFA]">
      <div class="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-24 items-start">
        <div class="reveal md:col-span-5 md:sticky md:top-32">
          <h2 class="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold tracking-tight">Dlaczego to robimy?</h2>
        </div>
        <div class="md:col-span-7 flex flex-col gap-8 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
          <p class="reveal">
            Movement Kolektyw to przestrzeń stworzona przez pasjonatów dla pasjonatów. Wierzymy, że każdy ma coś cennego
            do przekazania.
          </p>
          <p class="reveal">
            Nasze zajęcia nie mają jednego mistrza – są prowadzone rotacyjnie przez samych uczestników.
          </p>
          <p class="reveal font-medium text-[#1A1A1A]">
            Nieważne, z jakiej dyscypliny się wywodzisz: taniec, sztuki walki, akrobatyka czy joga. Tutaj łączymy
            kropki.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3: Zajęcia (Format i Cennik) -->
    <section id="zajecia" class="py-24 md:py-40 px-6 md:px-12 bg-[#F0F0F0]">
      <div class="max-w-7xl mx-auto">
        <div class="space-y-12 md:space-y-16">

          <!-- Nagłówek + info o terminach -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="reveal">
              <h2 class="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mb-6">
                Jak wyglądają spotkania?
              </h2>
              <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                Każde spotkanie trwa 1,5 godziny i składa się z 3 do 5 bloków tematycznych
                prowadzonych przez chętnych członków kolektywu. Jesteśmy otwarci na
                wszystkie poziomy zaawansowania.
              </p>
            </div>

            <div class="reveal flex justify-start md:justify-end">
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

          <!-- Cennik -->
          <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div v-for="plan in pricing" :key="plan.name" :class="[
              'reveal flex flex-col justify-between p-8 bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-xl relative',
              plan.featured ? 'border-2 border-[#D96C4A]' : 'border border-gray-200 hover:border-[#D96C4A]'
            ]">
              <div
                v-if="plan.featured"
                class="absolute -top-2 right-4 bg-[#D96C4A] text-white text-[11px] font-medium px-2 py-0.5 rounded">
                Najlepsza cena w mieście
              </div>
              <div>
                <div class="font-['Space_Grotesk'] text-2xl font-bold mb-2">{{ plan.name }}</div>
                <div class="text-3xl font-bold text-[#1A1A1A] mb-4">
                  {{ plan.price }} <span class="text-base font-normal text-gray-500">{{ plan.unit }}</span>
                </div>
              </div>
              <div
                class="text-sm font-medium text-[#D96C4A] bg-[#FAFAFA] py-2 px-3 inline-block rounded border border-gray-100 mt-8 text-center">
                {{ plan.perClass }}
              </div>
            </div>
          </div>

          <!-- Info banner -->
          <div
            class="reveal flex items-start md:items-center gap-3 text-sm font-medium bg-white px-5 py-3 border border-gray-200 rounded-lg text-gray-700 mx-auto w-fit">
            <Icon name="lucide:info" class="text-xl text-[#D96C4A]" />
            <span><strong>Jesteśmy inicjatywą non-profit.</strong> Opłaty w 100% pokrywają koszty sali i sprzętu.</span>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 4: Oś czasu wydarzeń -->
    <section id="wydarzenia" class="py-24 md:py-40 px-6 md:px-12 bg-[#FAFAFA]">
      <div class="max-w-4xl mx-auto">
        <h2 class="reveal font-['Space_Grotesk'] text-4xl md:text-6xl font-bold mb-16 border-b-2 border-gray-200 pb-8">
          Kalendarium wydarzeń</h2>

        <div class="relative">
          <div class="absolute left-[7px] top-2 bottom-0 w-[2px] bg-gray-200"></div>
          <div class="timeline-progress absolute left-[7px] top-2 bottom-0 w-[2px] bg-[#D96C4A]" />

          <div class="space-y-12">
            <div v-for="event in events" :key="event.title" class="reveal relative pl-8 md:pl-12 group">
              <div
                class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#D96C4A] ring-4 ring-[#FAFAFA] z-10 group-hover:scale-125 transition-transform duration-300">
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-sm font-bold text-gray-500 uppercase tracking-widest">{{ event.date }}</span>
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold">{{ event.title }}</h3>
                  <span :class="['px-3 py-1 text-xs font-bold uppercase tracking-wider rounded', badgeClass[event.type]]">
                    {{ event.type }}
                  </span>
                </div>
                <p class="text-lg text-gray-700">Prowadzący: <span class="font-semibold text-[#1A1A1A]">{{ event.instructor }}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Kontakt i Informacje -->
    <section id="kontakt" class="py-24 md:py-40 px-6 md:px-12 bg-white">
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 lg:gap-24">

          <div class="reveal space-y-8">
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

          <div class="reveal space-y-8">
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
})

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap' },
  ],
})

const pricing = [
  { name: 'Pojedyncze wejście', price: '35', unit: 'PLN', perClass: '35 PLN / zajęcia', featured: false },
  { name: 'Karnet 1x w tygodniu', price: '70', unit: 'PLN / mc', perClass: '17.50 PLN / zajęcia', featured: false },
  { name: 'Karnet 2x w tygodniu', price: '100', unit: 'PLN / mc', perClass: '12.50 PLN / zajęcia', featured: true },
]

const disciplines = ['taniec', 'sztuki walki', 'akrobatyka', 'joga', 'floorwork', 'mobility', 'lokomocja', 'partnering']

const events = [
  { date: '30 lipca - 2 sierpnia 2026', title: 'Obóz movementowy w Derkaczach vol 3.', type: 'wyjazd', instructor: 'Movement Kolektyw & Eryk Pawłowski' },
  { date: '4 czerwca 2026', title: 'Partnering i miękkie akrobacje w parach vol 2.', type: 'warsztat', instructor: 'Paweł Konior' },
  { date: '8 maja 2026', title: 'Partnering i miękkie akrobacje w parach', type: 'warsztat', instructor: 'Paweł Konior' },
  { date: '7 listopada 2025', title: 'Lokomocja i praca kręgosłupa', type: 'warsztat', instructor: 'Mikołaj Lira' },
  { date: 'sierpień 2025', title: 'Obóz movementowy w Derkaczach vol 2.', type: 'wyjazd', instructor: 'Movement Kolektyw' },
  { date: '27 kwietnia 2025', title: 'Ciężar, pęd i przestrzeń', type: 'warsztat', instructor: 'Tomasz Koszan' },
  { date: '5 stycznia 2025', title: '4 Filary Ruchu', type: 'warsztat', instructor: 'Filip Droszcz' },
  { date: '16 listopada 2024', title: 'Floorwork & Partnerowanie', type: 'warsztat', instructor: 'Katarzyna Paluch' },
  { date: '1 września 2024', title: 'Piknik Ruchowy Cytadela', type: 'outdoor', instructor: 'Movement Kolektyw' },
  { date: 'sierpień 2024', title: 'Obóz movementowy w Derkaczach vol 1.', type: 'wyjazd', instructor: 'Movement Kolektyw' },
  { date: '25 sierpnia 2024', title: 'Soft Acrobatics', type: 'warsztat', instructor: 'Lena Skrzypczak' },
  { date: '26 maja 2024', title: 'Primal Therapy', type: 'warsztat', instructor: 'Maciej Borucz' },
]

const badgeClass = {
  warsztat: 'bg-white border border-[#1A1A1A]/20 text-[#1A1A1A]',
  outdoor: 'bg-[#F0F0F0] text-gray-600',
  wyjazd: 'bg-[#D96C4A] text-white border border-[#D96C4A]',
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    // elements entering the viewport together cascade one after another
    entries.filter(entry => entry.isIntersecting).forEach((entry, i) => {
      entry.target.style.animationDelay = `${i * 90}ms`
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.15 })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.hero-mask {
  display: block;
  overflow: hidden;
  padding-bottom: 0.12em; /* room for descenders inside the clip */
}

.hero-line {
  display: block;
}

.blob:nth-child(2) {
  position: absolute;
  top: 6%;
  right: -4%;
  width: min(420px, 60vw);
  height: min(420px, 60vw);
  opacity: 0.12;
}

.blob:first-child {
  opacity: 0.05;
}

.timeline-progress {
  display: none;
}

/* all motion lives here, so reduced-motion users get a static, fully visible page */
@media (prefers-reduced-motion: no-preference) {
  .hero-line {
    animation: line-up 1s cubic-bezier(0.16, 1, 0.3, 1) backwards;
    animation-delay: calc(var(--i, 0) * 120ms + 100ms);
  }

  .hero-in {
    animation: rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) backwards;
    animation-delay: calc(var(--i, 0) * 120ms + 100ms);
  }

  .reveal {
    opacity: 0;
  }

  .reveal.is-visible {
    opacity: 1;
    animation: rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  }

  .blob {
    animation: drift 36s linear infinite;
  }

  .blob:nth-child(2) {
    animation-duration: 24s;
    animation-direction: reverse;
  }

  .marquee-track {
    animation: marquee 32s linear infinite;
  }

  /* the accent line follows the scroll position; browsers without scroll timelines keep the grey line */
  @supports (animation-timeline: view()) {
    .timeline-progress {
      display: block;
      transform-origin: top;
      animation: grow linear both;
      animation-timeline: view(60% 40%);
    }
  }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
}

@keyframes line-up {
  from {
    transform: translateY(110%);
  }
}

@keyframes drift {
  50% {
    transform: rotate(180deg) scale(1.2) translate(5%, 4%);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* the track holds 4 identical sets, so shifting by one set loops seamlessly */
@keyframes marquee {
  to {
    transform: translateX(-25%);
  }
}

@keyframes grow {
  from {
    transform: scaleY(0);
  }
}
</style>
