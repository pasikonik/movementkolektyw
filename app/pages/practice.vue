<template>
  <div class="container mx-auto px-4 py-6 max-w-4xl">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800">Treningi</h1>

   <div class="max-w-6xl mx-auto px-4 py-8 md:py-16">
        
        <!-- WTOREK -->
        <div class="mb-10 md:mb-16">
            <div class="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 session-card">
                <!-- Nagłówek dnia -->
                <div class="px-6 py-5 border-b-2 border-gray-200">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900">WTOREK</h2>
                </div>

                <!-- Sesja Movement -->
                <div class="p-6 md:p-8">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <div class="flex items-center gap-3 mb-3 sm:mb-0">
                            <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <span class="text-xl">🏃‍♂️</span>
                            </div>
                            <h3 class="text-xl md:text-2xl font-semibold text-gray-900">Movement</h3>
                        </div>
                        <div class="inline-flex items-center gap-2 text-gray-600 font-medium">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>18:45 - 20:15</span>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-green-400 hover:bg-green-50">
                            <div class="font-semibold text-gray-900 mb-1">Mobilność barków</div>
                            <div class="text-sm text-gray-500">Przygotowanie</div>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-green-400 hover:bg-green-50">
                            <div class="font-semibold text-gray-900 mb-1">Koordynacje</div>
                            <div class="text-sm text-gray-500">Technika</div>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-green-400 hover:bg-green-50">
                            <div class="font-semibold text-gray-900 mb-1">Skin the cat</div>
                            <div class="text-sm text-gray-500">Kółka gimnastyczne</div>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-green-400 hover:bg-green-50">
                            <div class="font-semibold text-gray-900 mb-1">Pancake</div>
                            <div class="text-sm text-gray-500">Sprawność</div>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-green-400 hover:bg-green-50">
                            <div class="font-semibold text-gray-900 mb-1">Relaks</div>
                            <div class="text-sm text-gray-500">Zakończenie</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CZWARTEK -->
        <div class="mb-10">
            <div class="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 session-card">
                <!-- Nagłówek dnia -->
                <div class="px-6 py-5 border-b-2 border-gray-200">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900">CZWARTEK</h2>
                </div>

                <!-- Sesja Handstand -->
                <div class="p-6 md:p-8 border-b-2 border-gray-200">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <div class="flex items-center gap-3 mb-3 sm:mb-0">
                            <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <span class="text-xl">🤸‍♂️</span>
                            </div>
                            <h3 class="text-xl md:text-2xl font-semibold text-gray-900">Handstand</h3>
                        </div>
                        <div class="inline-flex items-center gap-2 text-gray-600 font-medium">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>17:30 - 18:30</span>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3 md:gap-4">
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-orange-400 hover:bg-orange-50">
                            <div class="font-semibold text-gray-900 mb-1">Rozgrzewka</div>
                            <div class="text-sm text-gray-500">Przygotowanie</div>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-orange-400 hover:bg-orange-50">
                            <div class="font-semibold text-gray-900 mb-1">Praktyka</div>
                            <div class="text-sm text-gray-500">Technika handstand</div>
                        </div>
                    </div>
                </div>

                <!-- Sesja Movement -->
                <div class="p-6 md:p-8">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <div class="flex items-center gap-3 mb-3 sm:mb-0">
                            <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <span class="text-xl">🏃‍♂️</span>
                            </div>
                            <h3 class="text-xl md:text-2xl font-semibold text-gray-900">Movement</h3>
                        </div>
                        <div class="inline-flex items-center gap-2 text-gray-600 font-medium">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>18:45 - 20:15</span>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-green-400 hover:bg-green-50">
                            <div class="font-semibold text-gray-900 mb-1">Rozgrzewka</div>
                            <div class="text-sm text-gray-500">Przygotowanie</div>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-green-400 hover:bg-green-50">
                            <div class="font-semibold text-gray-900 mb-1">Sekwencje</div>
                            <div class="text-sm text-gray-500">Koordynacje</div>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-green-400 hover:bg-green-50">
                            <div class="font-semibold text-gray-900 mb-1">Improwizacja</div>
                            <div class="text-sm text-gray-500">Integracja</div>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-green-400 hover:bg-green-50">
                            <div class="font-semibold text-gray-900 mb-1">Siła nóg</div>
                            <div class="text-sm text-gray-500">Sprawność</div>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 hover-lift cursor-pointer border-2 border-transparent hover:border-green-400 hover:bg-green-50">
                            <div class="font-semibold text-gray-900 mb-1">Rozciąganie</div>
                            <div class="text-sm text-gray-500">Zakończenie</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Informacja o planie -->
        <div class="text-center mt-12">
            <div class="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>Plan na: listopad-grudzień 2025</span>
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
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Grafik Treningów Movement Poznań',
  description: 'Dołącz na treningi przy ul. Wielkiej 19 w Poznaniu. Trenujemy we wtorki i czwartki. Sprawdź plan!',
})
</script>