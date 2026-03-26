<template>
  <nav :class="[
    'fixed w-full z-50 transition-all duration-300 px-6 md:px-12',
    isScrolled ? 'bg-[#FAFAFA]/70 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'
  ]">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <NuxtLink to="#hero" class="block">
        <NuxtImg src="/name.avif" alt="Movement Kolektyw" class="h-8 w-auto" loading="eager" fetchpriority="high" />
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-8 font-medium">
        <a href="#misja" class="hover:text-[#D96C4A] transition-colors">Misja</a>
        <a href="#zajecia" class="hover:text-[#D96C4A] transition-colors">Zajęcia</a>
        <a href="#wydarzenia" class="hover:text-[#D96C4A] transition-colors">Wydarzenia</a>
        <a href="#kontakt" class="hover:text-[#D96C4A] transition-colors">Kontakt</a>
      </div>

      <!-- Mobile Hamburger -->
      <button class="md:hidden text-2xl focus:outline-none" aria-label="Menu" @click="toggleMobileMenu">
        <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" />
      </button>
    </div>

    <!-- Mobile Menu Panel -->
    <div v-show="isMobileMenuOpen"
      class="absolute top-full left-0 w-full bg-[#FAFAFA] shadow-lg border-t border-gray-200 flex flex-col p-6 gap-6 font-medium text-lg md:hidden">
      <a href="#misja" @click="closeMobileMenu" class="hover:text-[#D96C4A]">Misja</a>
      <a href="#zajecia" @click="closeMobileMenu" class="hover:text-[#D96C4A]">Zajęcia</a>
      <a href="#wydarzenia" @click="closeMobileMenu" class="hover:text-[#D96C4A]">Wydarzenia</a>
      <a href="#kontakt" @click="closeMobileMenu" class="hover:text-[#D96C4A]">Kontakt</a>
    </div>
  </nav>
</template>

<script setup>
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
