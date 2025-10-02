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
</script>

