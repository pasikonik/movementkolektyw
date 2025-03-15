<template>
  <UFooter class="footer">
    <UContainer>
      <p>© {{ currentYear }} MOVEMENT KOLEKTYW</p>

      <!-- Social media -->
      <div class="mt-2 flex justify-center gap-4">

     
          <!-- Link do Facebooka -->
          <a href="https://facebook.com/profile.php?id=61574152281731" target="_blank" rel="noopener noreferrer" class="inline-block">
            <!-- Ikona Facebooka -->
            <UIcon name="logos:facebook" alt="Facebook" class="w-6 h-6 inline-block" />
          </a>

          <!-- Link do Instagrama -->
          <a href="https://instagram.com/movement_kolektyw" target="_blank" rel="noopener noreferrer" class="inline-block">
            <!-- Ikona Instagrama -->
            <UIcon name="logos:instagram-icon" alt="Instagram" class="w-6 h-6 inline-block" />
          </a>
      </div>
    </UContainer>
  </UFooter>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>