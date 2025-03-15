<template>
  <!-- Komponent nagłówka z Nuxt UI v3 -->
  <UHeader class="header">
    <UContainer>
      <div class="flex justify-between">
        <div>
          <img src="~/assets/images/name.png" alt="Logo firmy" class="logo-img">
        </div>

        <!-- Menu nawigacyjne -->
        <nav class="nav">
          <!-- UFlex ustawia przyciski obok siebie, z odstępem (gap) -->
          <div>
            <UButton variant="ghost" size="xl" as="nuxt-link" to="/mission">Misja</UButton>
            <UButton variant="ghost" size="xl" as="nuxt-link" to="/practice">Zajęcia</UButton>
            <UButton variant="ghost" size="xl" as="nuxt-link" to="/contact">Kontakt</UButton>
          </div>
        </nav>


      </div>
    </UContainer>
  </UHeader>
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
