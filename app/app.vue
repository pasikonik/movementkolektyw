<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
useHead({
  bodyAttrs: { class: "light" },
});
</script>

<style>
html {
  color-scheme: light;
}

html.dark {
  display: none;
}
</style>