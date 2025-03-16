<template>
  <ULayout class="flex flex-col">
    <Header />

    <UMain class="flex-1">
      <NuxtPage />
    </UMain>

    <Footer />
  </ULayout>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>
