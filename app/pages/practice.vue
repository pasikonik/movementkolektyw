<template>
  <main class="pt-6 md:pt-18 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="text-center mb-8 md:mb-16">
      <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-2 md:mb-4">Treningi</h1>
      <p class="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
        Rozwijaj swoje ciało i umysł poprzez świadomy ruch. Dołącz do nas w Poznaniu.
      </p>
      <div class="mt-4 md:mt-6 inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-slate-200 bg-white shadow-sm text-xs md:text-sm text-slate-600">
        <Icon name="lucide:calendar-days" class="w-3 md:w-4 h-3 md:h-4 text-teal-500" />
        Plan na: listopad 2025 - styczeń 2026
      </div>
    </div>

    <div class="grid gap-6 md:gap-12 mb-12 md:mb-24">
      <div
        v-for="(day, index) in schedule"
        :key="index"
        class="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 hover:border-teal-100 transition-colors duration-300"
      >
        <div class="p-4 md:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 bg-gradient-to-r from-white to-slate-50">
          <div>
            <h2 class="text-xl md:text-2xl font-bold text-slate-900 uppercase tracking-wide">{{ day.day }}</h2>
            <div class="flex items-center gap-2 mt-1 md:mt-2 text-teal-600 font-medium text-sm md:text-base">
              <span class="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-teal-100 rounded-lg shrink-0">
                <Icon name="lucide:footprints" class="w-4 md:w-5 h-4 md:h-5" />
              </span>
              <span>{{ day.type }}</span>
            </div>
          </div>
          
          <div class="flex items-center gap-2 text-slate-500 bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-xl border border-slate-200 shadow-sm text-sm md:text-base">
            <Icon name="lucide:clock" class="w-3 md:w-4 h-3 md:h-4" />
            <div class="flex items-baseline gap-2">
              <span class="font-mono">{{ day.time }}</span>
              <span class="text-xs text-teal-600 font-semibold bg-teal-50 px-1.5 rounded border border-teal-100 whitespace-nowrap hidden sm:inline-block">
                {{ day.duration }}
              </span>
              <span class="text-xs text-teal-600 font-semibold sm:hidden">
                ({{ day.duration }})
              </span>
            </div>
          </div>
        </div>

        <div class="p-4 md:p-8 bg-white">
          <div class="grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4">
            <div
              v-for="(step, sIndex) in day.steps"
              :key="sIndex"
              class="group relative p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 hover:bg-teal-50 transition-colors duration-200 border border-slate-100 hover:border-teal-200 overflow-hidden"
            >
              <div class="text-[10px] md:text-xs uppercase tracking-wider text-slate-400 mb-0.5 md:mb-1 group-hover:text-teal-600 font-medium">
                {{ step.category }}
              </div>
              <div class="font-semibold text-slate-800 group-hover:text-teal-900 text-xs md:text-base">{{ step.name }}</div>
              <div class="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-teal-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-12 md:mb-24 px-8">
      <h3 class="text-2xl md:text-3xl font-bold text-center mb-4">Cennik</h3>
      
      <div class="max-w-md mx-auto mb-6 md:mb-8 p-3 md:p-4 bg-slate-50 rounded-xl">
        <p class="text-xs md:text-sm text-center text-slate-400">
          <Icon name="lucide:info" class="w-3 md:w-4 h-3 md:h-4 inline-block mr-1 opacity-70" />
          Kwota przeznaczona wyłącznie na wynajem sali
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto items-center">
        
        <div class="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow text-center group">
          <div class="text-slate-500 mb-1 md:mb-2 font-medium text-sm md:text-base">Jednorazowe wejście</div>
          <div class="text-3xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-teal-600 transition-colors">35 PLN</div>
          <p class="text-xs md:text-sm text-slate-400">Idealne na próbę</p>
          <p class="text-[10px] md:text-xs text-slate-500 mt-1 md:mt-2">35 PLN / zajęcia</p>
        </div>

        <div class="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow text-center group">
          <div class="text-slate-500 mb-1 md:mb-2 font-medium text-sm md:text-base">Raz w tygodniu</div>
          <div class="text-3xl md:text-4xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-teal-600 transition-colors">70 PLN</div>
          <p class="text-xs md:text-sm text-slate-400">Karnet miesięczny</p>
          <p class="text-[10px] md:text-xs text-slate-500 mt-1 md:mt-2">17,50 PLN / zajęcia</p>
        </div>

        <div class="relative bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border-2 border-teal-500 shadow-2xl md:scale-105 z-10 text-center">
          <div class="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-3 md:px-4 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide">
            Najlepszy wybór
          </div>
          <div class="text-slate-500 mb-1 md:mb-2 font-medium text-sm md:text-base">Dwa razy w tygodniu</div>
          <div class="text-4xl md:text-5xl font-bold text-slate-900 mb-1 md:mb-2 text-teal-600">100 PLN</div>
          <p class="text-xs md:text-sm text-slate-400">Karnet miesięczny</p>
          <p class="text-[10px] md:text-xs text-teal-600 font-semibold mt-1 md:mt-2">12,50 PLN / zajęcia</p>
        </div>

      </div>
    </div>

    <div class="p-10 flex flex-col items-center">
      <h4 class="text-xl font-semibold mb-2">Studio Movement Poznań</h4>
      <div class="flex items-center space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <a href="https://maps.app.goo.gl/rdUvGnu2DjSosHtv7" target="_blank"
          class="text-gray-700 font-medium hover:text-green-600 transition duration-100">
          ul. Wielka 19/8 <br>
          61-775 Poznań, Polska
        </a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const schedule = ref([
  {
    day: 'Wtorek',
    type: 'Zajęcia Movement',
    time: '18:45 - 20:15',
    duration: '90 min', // ZMIANA: Dodano pole duration
    steps: [
      { category: 'Przygotowanie', name: 'Mobilność barków' },
      { category: 'Technika', name: 'Koordynacje' },
      { category: 'Kółka gimnastyczne', name: 'Skin the cat' },
      { category: 'Sprawność', name: 'Pancake' },
      { category: 'Zakończenie', name: 'Relaks' }
    ]
  },
  {
    day: 'Czwartek',
    type: 'Zajęcia Movement',
    time: '18:45 - 20:15',
    duration: '90 min', // ZMIANA: Dodano pole duration
    steps: [
      { category: 'Przygotowanie', name: 'Rozgrzewka' },
      { category: 'Koordynacje', name: 'Sekwencje' },
      { category: 'Integracja', name: 'Improwizacja' },
      { category: 'Sprawność', name: 'Siła nóg' },
      { category: 'Zakończenie', name: 'Rozciąganie' }
    ]
  }
])
</script>

<style scoped>
/* Dodatkowe style jeśli potrzebne */
</style>