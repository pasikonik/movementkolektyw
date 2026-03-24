<template>
  <div class="flex flex-col h-full">
    <!-- Navbar -->
    <nav :class="[
      'fixed w-full z-50 transition-all duration-300 px-6 md:px-12',
      isScrolled ? 'bg-[#FAFAFA]/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'
    ]">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#hero" class="font-['Space_Grotesk'] font-bold text-xl tracking-tighter">Movement Kolektyw.</a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-8 font-medium">
          <a href="#misja" class="hover:text-[#D96C4A] transition-colors">Misja</a>
          <a href="#zajecia" class="hover:text-[#D96C4A] transition-colors">Zajęcia</a>
          <a href="#wydarzenia" class="hover:text-[#D96C4A] transition-colors">Wydarzenia</a>
          <a href="#kontakt" class="hover:text-[#D96C4A] transition-colors">Kontakt</a>
        </div>

        <!-- Mobile Hamburger -->
        <button @click="toggleMobileMenu" class="md:hidden text-2xl focus:outline-none" aria-label="Menu">
          <i :class="isMobileMenuOpen ? 'ph ph-x' : 'ph ph-list'"></i>
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

    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>
