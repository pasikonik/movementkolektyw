<template>
  <div class="header">
    <UContainer>
      <div class="flex justify-between">

        <NuxtLink to="/">
          <!-- <NuxtImg src="/name.png" alt="MOVEMENT KOLEKTYW" /> -->
          <img src="/name.png" alt="MOVEMENT KOLEKTYW">
        </NuxtLink>

        <nav class="nav">
          <div>
            <UButton variant="ghost" size="xl" as="nuxt-link" to="/mission">Misja</UButton>
            <UButton variant="ghost" size="xl" as="nuxt-link" to="/practice">Zajęcia</UButton>
            <UButton variant="ghost" size="xl" as="nuxt-link" to="/contact">Kontakt</UButton>
          </div>
        </nav>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nav {
  width: 300px;
}

.header {
  background: #f0f0f0;
  padding: 1rem 0;
}

.logo-img {
  width: auto;
  display: block;
}
</style>
