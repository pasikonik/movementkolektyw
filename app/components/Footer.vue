<template>
  <div class="footer">
    <UContainer>
      <div class="mt-2 flex justify-center gap-4">
        <a 
          href="https://facebook.com/profile.php?id=61574152281731" target="_blank" rel="noopener noreferrer"
          class="inline-block">
          <UIcon name="logos:facebook" alt="Facebook" class="w-6 h-6 inline-block" />
        </a>

        <a 
          href="https://instagram.com/movement_kolektyw" target="_blank" rel="noopener noreferrer"
          class="inline-block">
          <UIcon name="logos:instagram-icon" alt="Instagram" class="w-6 h-6 inline-block" />
        </a>
      </div>

      <p>© {{ currentYear }} MOVEMENT KOLEKTYW</p>
    </UContainer>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #f0f0f0;
  padding: 1rem 0;
  text-align: center;
}
</style>