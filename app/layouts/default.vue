<template>
  <ULayout class="flex flex-col h-full">
    <Header />

      <main class="content">
        <NuxtPage />
      </main>

    <Footer />
  </ULayout>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style scoped>
.content {
  min-height: calc(100vh - 192px);
}
</style>