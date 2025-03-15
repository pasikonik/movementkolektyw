<template>
  <ULayout class="flex flex-col min-h-screen">
    <Header />

    <UMain class="main-content flex-1">
      <NuxtPage />
    </UMain>

    <Footer />
  </ULayout>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>


<style scoped>
.main-content {
  padding: 2rem 0;
}

.footer {
  background: #f0f0f0;
  padding: 1rem 0;
  text-align: center;
}
</style>