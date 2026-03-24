<template>
  <footer class="bg-[#FAFAFA] text-[#1A1A1A] py-8 px-6 text-center border-t border-gray-200 mt-auto">
    <p class="font-body text-sm text-gray-500">
      &copy; {{ currentYear }} Movement Kolektyw. Ruch non-profit.
    </p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>