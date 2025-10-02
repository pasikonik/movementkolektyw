<template>
  <div class="header h-18">
    <UContainer class="h-full">
      <!-- Mobile -->
      <div class="h-full lg:hidden flex justify-between items-center">
        <button class="p-2 cursor-pointer flex items-center" @click="toggleMenu">
          <UIcon :class="{'rotate-180 transition-transform duration-300 ease-in-out': isMenuOpen}" class="size-6"
            :name="isMenuOpen ? 'lucide:x' : 'lucide:align-justify'" />
        </button>

        <NuxtLink to="/" class="w-2/3">
          <img src="/name.webp" alt="MOVEMENT KOLEKTYW">
        </NuxtLink>

        <UBadge class="py-1" color="neutral" variant="outline">non-profit</UBadge>

        <!-- Overlay -->
        <div v-if="isMenuOpen" class="fixed inset-0 z-10" @click="toggleMenu" />

        <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
          <div v-if="isMenuOpen" class="mobile-menu absolute top-18 left-0 w-full bg-white shadow-lg z-10 transform">
            <ul class="flex flex-col items-center p-4">
              <li v-for="(item, index) in items[0]" :key="index" class="py-2">
                <NuxtLink :to="item.to"
                  class="flex items-center text-xl transition-transform duration-300 ease-in-out hover:scale-105"
                  @click="toggleMenu">
                  <UIcon :name="item.icon" class="size-7 mr-2 transition-transform duration-300 hover:rotate-12" />
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </transition>
      </div>


      <!-- Desktop -->
      <div class="h-full max-sm:hidden flex justify-between items-center">
        <NuxtLink to="/">
          <img src="/name.webp" alt="MOVEMENT KOLEKTYW">
        </NuxtLink>

        <UBadge class="text-md py-1" color="neutral" variant="outline">non-profit</UBadge>

        <UNavigationMenu :items="items" />
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
      label: 'Wydarzenia',
      icon: 'i-lucide-calendar-days',
      to: '/events'
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


<style>
.navbar-link {
  padding: 10px 14px;
}
</style>