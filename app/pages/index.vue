<template>
   <div>
      <HeroSection />

      <WordMap />
   </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue';
import WordMap from '~/components/WordMap.vue';

const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;

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
</script>

