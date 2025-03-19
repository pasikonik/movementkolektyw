<template>
  <div class="header">
    <UContainer>
      <!-- Przycisk menu (mobile) -->
      <div class="lg:hidden flex">
        <button @click="toggleMenu" class="p-2 text-blue-500 cursor-pointer">
          <UIcon v-if="!isMenuOpen" class="size-4" name="lucide:align-justify" />
          <UIcon v-if="isMenuOpen" class="size-4" name="lucide:x" />
        </button>

        <NuxtLink to="/">
          <img src="/name.png" alt="MOVEMENT KOLEKTYW">
        </NuxtLink>

        <!-- Menu -->
        <div v-if="isMenuOpen" class="mobile-menu absolute top-10 left-0 w-full bg-white shadow-lg z-10">
          <ul class="flex flex-col items-center p-4">
            <li v-for="(item, index) in items[0]" :key="index" class="py-2">
              <NuxtLink :to="item.to" class="flex items-center text-lg text-blue-500" @click="toggleMenu">
                <UIcon :name="item.icon" class="w-6 h-6 inline-block" />
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="max-sm:hidden flex justify-between">
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

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.nav {
  width: 300px;
}

.header {
  background: #f0f0f0;
  padding: 1rem 0;
  position: relative;
}

.mobile-menu {
  background: #f0f0f0;
}

.logo-img {
  width: auto;
  display: block;
}
</style>
