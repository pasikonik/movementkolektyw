<template>
  <div class="header">
    <UContainer>
      <div class="flex justify-between">
        <NuxtLink to="/">
          <img src="/name.png" alt="MOVEMENT KOLEKTYW">
        </NuxtLink>

        <UNavigationMenu class="text-xl" color="neutral" :items="items" />
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const items = ref([
  [
    {
      label: 'Misja',
      icon: 'i-lucide-telescope',
      to: '/mission'
    },
    {
      label: 'Zajęcia',
      icon: 'i-lucide-person-standing',
      to: '/practice'
    },
    {
      label: 'Kontakt',
      icon: 'i-lucide-circle-user-round',
      to: '/contact',
    }
  ],
])
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
