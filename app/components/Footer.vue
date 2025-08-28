<template>
  <div class="border-t border-gray-200 py-4 text-center">
    <div class="flex justify-center gap-4 my-2">
      <a href="https://www.facebook.com/movementkolektyw/" target="_blank" rel="noopener noreferrer"
        class="inline-block">
        <UIcon name="fa-brands:facebook-square" alt="Facebook" class="w-6 h-6 inline-block" />
      </a>

      <a href="https://instagram.com/movement_kolektyw" target="_blank" rel="noopener noreferrer" class="inline-block">
        <UIcon name="fa-brands:instagram" alt="Instagram" class="w-6 h-6 inline-block" />
      </a>
    </div>

    <p>© {{ currentYear }} MOVEMENT KOLEKTYW</p>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>