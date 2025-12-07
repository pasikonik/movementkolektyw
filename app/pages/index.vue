<template>
   <div>
      <HeroSection />

      <WordMap />
   </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue';
import WordMap from '~/components/WordMap.vue';

useSeoMeta({
  title: 'Movement Kolektyw - Ruch dla każdego | Poznań',
  description: 'Odkryj na nowo możliwości swojego ciała w społeczności pasjonatów ruchu. Uczymy się przez skok, balans i eksplorację. Przełam schematy i dołącz do nas!',
})

useSeoMeta({
  // 1. Tytuł: Słowa kluczowe + Brand.
  // Format: [Co to jest/Gdzie] | [Nazwa Brandu]
  title: 'Movement Kolektyw - Społeczność, Treningi i Warsztaty | Poznań',
  
  // 2. Opis: Musi zawierać "Movement", "Poznań" i konkrety (mobility, siła, etc.)
  description: 'Szukasz zajęć Movement w Poznaniu? Dołącz do Movement Kolektyw. Rozwijaj ciało poprzez naturalny ruch, mobility, akrobatykę i siłę. Sprawdź grafik zajęć i trenuj z nami!',
  
  // 3. Konfiguracja Open Graph (dla social mediów)
  ogTitle: 'Movement Kolektyw - Dołącz do społeczności ruchu',
  ogDescription: 'Odkryj możliwości swojego ciała. Treningi grupowe, warsztaty i pasjonaci ruchu w sercu Poznania.',
  ogImage: `${siteUrl}/name.webp`,
  ogUrl: siteUrl,
  ogType: 'website',
  ogLocale: 'pl_PL',
  
  // 4. Twitter Card (ważne, jeśli udostępniasz na X)
  twitterCard: 'summary_large_image',
  twitterTitle: 'Movement Kolektyw | Poznań',
  twitterDescription: 'Trening naturalny i społeczność w Poznaniu. Zobacz więcej.',
  twitterImage: `${siteUrl}/name.webp`,
  
  // 5. Kolor paska w przeglądarce (mobile)
  themeColor: '#ffffff', // Zmień na swój kolor brandowy
})
</script>

