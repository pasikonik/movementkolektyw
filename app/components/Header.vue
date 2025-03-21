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
          <img src="/name.png" alt="MOVEMENT KOLEKTYW">
        </NuxtLink>

        <UBadge class="py-1" color="neutral" variant="outline">non-profit</UBadge>

        <!-- Overlay -->
        <div v-if="isMenuOpen" class="fixed inset-0 z-10"
          @click="toggleMenu"></div>

        <!-- Menu -->
        <div v-show="isMenuOpen" class="mobile-menu absolute top-18 left-0 w-full bg-white shadow-lg z-10 
           transition-all duration-500 ease-in-out transform origin-top 
           scale-y-100 opacity-100" :class="{'scale-y-0 opacity-0': !isMenuOpen}">
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
      </div>


      <!-- Desktop -->
      <div class="h-full max-sm:hidden flex justify-between items-center">
        <NuxtLink to="/">
          <img src="/name.png" alt="MOVEMENT KOLEKTYW">
        </NuxtLink>

        <UBadge class="text-md py-1" color="neutral" variant="outline">non-profit</UBadge>

        <UNavigationMenu class="!text-3xl" color="neutral" :items="items">
          <template #components-label>
            <UBadge label="44" variant="subtle" size="sm" />
          </template>
        </UNavigationMenu>
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
