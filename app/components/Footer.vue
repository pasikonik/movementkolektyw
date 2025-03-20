<template>
  <div class="footer">
    <div class="flex justify-center gap-4 my-2">
      <a href="https://facebook.com/profile.php?id=61574152281731" target="_blank" rel="noopener noreferrer" class="inline-block">
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

<style scoped>
.footer {
  border-top: solid 1px #eee;
  padding: 1rem 0;
  text-align: center;
}
</style>