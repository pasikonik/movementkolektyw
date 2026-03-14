<template>
   <div>
      <HeroSection />
   </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue';

const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;

useHead({
   link: [
      {
         rel: 'preload',
         as: 'image',
         href: '/_netlify/images?w=1536&url=%2Ftlo.avif',
         fetchpriority: 'high'
      }
   ]
})

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
