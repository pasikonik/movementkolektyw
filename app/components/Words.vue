<template>
  <section id="dictionary" class="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center overflow-hidden relative">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-delayed" />
    </div>

    <div class="w-full max-w-7xl mx-auto px-6 py-12 relative z-10">
      <!-- Header with fade-in animation -->
      <div class="text-center mb-12 animate-fade-in">
        <h2 class="text-5xl md:text-6xl font-bold text-stone-800 mb-4 tracking-tight">
          Słownik
        </h2>
      </div>

      <!-- Main word cloud container -->
      <div 
        class="relative max-w-6xl mx-auto p-8 md:p-16 rounded-[3rem] bg-white/80 backdrop-blur-sm border border-stone-200/50 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:bg-white/90"
      >

        <!-- Word cloud -->
        <div class="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-10">
          <span 
            v-for="(word, index) in words" 
            :key="index"
            :style="getWordStyle(word, index)"
            :class="[
              'word-tag',
              'font-light',
              'tracking-tight',
              'cursor-pointer',
              'transition-all',
              'duration-500',
              'ease-out',
              'relative',
              'group',
              selectedWord === index ? 'selected' : ''
            ]"
            @click="toggleWord(index)"
            @mouseenter="hoverWord = index"
            @mouseleave="hoverWord = null"
          >
            <!-- Glow effect on hover -->
            <span class="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 rounded-lg blur-xl transition-all duration-300" />
            
            <!-- Word text -->
            <span class="relative z-10">{{ word.text }}</span>
            
            <!-- Underline animation -->
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" />
          </span>
        </div>

        <!-- Floating particles -->
        <div 
          v-for="i in 5" 
          :key="`particle-${i}`"
          class="absolute w-2 h-2 bg-green-500/20 rounded-full animate-float"
          :style="getParticleStyle(i)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const words = ref([
  { text: 'Adaptacja', size: 1.625 },
  { text: 'Animal Movement', size: 0.9375 },
  { text: 'Balans', size: 1.125 },
  { text: 'Capoeira', size: 1.5625 },
  { text: 'Ciało', size: 1.5 },
  { text: 'Dynamika', size: 2 },
  { text: 'Eksperymentowanie', size: 1.0625 },
  { text: 'Eksploracja Ciała', size: 1.625 },
  { text: 'Eksploracja', size: 2 },
  { text: 'Elastyczność', size: 1 },
  { text: 'Elastyczność Mentalna', size: 1.9375 },
  { text: 'Flow', size: 2.375 },
  { text: 'Gimnastyka', size: 1.5625 },
  { text: 'Gra', size: 1.5625 },
  { text: 'Improwizacja Ruchowa', size: 1.6125 },
  { text: 'Improwizacja', size: 1.125 },
  { text: 'Integracja', size: 1.4375 },
  { text: 'Interakcja', size: 1.175 },
  { text: 'Intuicja', size: 1.4375 },
  { text: 'Joga', size: 2.1875 },
  { text: 'Kalistenika', size: 0.875 },
  { text: 'Kontrola', size: 1.25 },
  { text: 'Koordynacja', size: 1.875 },
  { text: 'Kółka Gimnastyczne', size: 1.625 },
  { text: 'Miękka Akrobatyka', size: 1.625 },
  { text: 'Mobilność', size: 0.875 },
  { text: 'Movement', size: 2.5 },
  { text: 'Naturalność', size: 0.94375   },
  { text: 'Oddech', size: 2 },
  { text: 'Organiczność', size: 1.125 },
  { text: 'Parkour', size: 1.5625 },
  { text: 'Percepcja', size: 0.8125 },
  { text: 'Połączenie', size: 1.0625 },
  { text: 'Precyzja', size: 0.8125 },
  { text: 'Przestrzeń', size: 0.925 },
  { text: 'Pęd', size: 1.75 },
  { text: 'Płynność', size: 1.875 },
  { text: 'Qigong', size: 2 },
  { text: 'Ruch', size: 2.5 },
  { text: 'Równowaga', size: 1.625 },
  { text: 'Siła Funkcjonalna', size: 0.8125 },
  { text: 'Siła', size: 1.4375 },
  { text: 'Spontaniczność', size: 1.1875 },
  { text: 'Swoboda Ruchu', size: 1.125 },
  { text: 'Sztuki Walki', size: 1.5 },
  { text: 'Taniec', size: 0.9375 },
  { text: 'Układ Nerwowy', size: 0.9375 },
  { text: 'Zabawa', size: 1.0625 },
  { text: 'Zmysły', size: 1.375 },
  { text: 'Zwinność', size: 1.5 },
]);

const selectedWord = ref(null);
const hoverWord = ref(null);

const getWordStyle = (word, index) => {
  const baseSize = word.size || 1.5;
  const isSelected = selectedWord.value === index;
  const isHovered = hoverWord.value === index;
  
  let scale = 1;
  if (isSelected) scale = 1.2;
  else if (isHovered) scale = 1.15;
  
  return {
    fontSize: `${baseSize}rem`,
    color: isSelected ? '#10b981' : (isHovered ? '#059669' : '#44403c'),
    fontWeight: isSelected ? '600' : (isHovered ? '500' : '300'),
    transform: `scale(${scale}) rotate(${isSelected ? '2deg' : '0deg'})`,
    textShadow: isSelected ? '0 4px 20px rgb(16 185 129 / 30%)' : 'none',
    animationDelay: `${index * 0.05}s`,
  };
};

const toggleWord = (index) => {
  selectedWord.value = selectedWord.value === index ? null : index;
};

const getParticleStyle = (index) => {
  const positions = [
    { top: '10%', left: '15%' },
    { top: '60%', left: '80%' },
    { top: '30%', left: '90%' },
    { top: '80%', left: '20%' },
    { top: '50%', left: '50%' },
  ];
  
  return {
    ...positions[index - 1],
    animationDelay: `${index * 0.7}s`,
    animationDuration: `${3 + index}s`,
  };
};
</script>

<style scoped>
.word-tag {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

.word-tag.selected {
  animation: bounce 0.6s ease-out forwards;
  opacity: 1 !important;
}

.animate-pulse-delayed {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 1s;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0% {
    transform: scale(1.2) translateY(0);
  }

  50% {
    transform: scale(1.2) translateY(-10px);
  }

  100% {
    transform: scale(1.2) translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.2;
  }

  50% {
    transform: translateY(-20px) translateX(10px);
    opacity: 0.5;
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
  animation-delay: 0.3s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Smooth shadow transitions */
.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgb(0 0 0 / 15%);
}

/* Responsive adjustments */
@media (width <= 768px) {
  .word-tag {
    font-size: 1.2rem !important;
  }
}
</style>