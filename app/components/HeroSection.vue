<template>
    <!-- Zewnętrzny wrapper hero -->
    <section class="hero-section ">
        <!-- Kontener z Nuxt UI -->
        <UContainer class="hero-content">
            <!-- Nagłówek (tutaj np. tytuł zachęcający do zgłębiania naturalnych metod) -->
            <UHeading level="1" class="hero-title">
                Porusz w sobie to co najlepsze
            </UHeading>

            <!-- Krótki opis / zachęta -->
            <div class="hero-description">
                <p> JESTEŚMY SPOŁECZNOŚCIĄ RUCHOWĄ, KTÓRA EKSPLORUJE CIAŁO I JEGO MOŻLIWOŚCI W SPOSÓB NIESZABLONOWY </p>
                <p> NIE ZAMYKAMY SIĘ W SCHEMATACH – ZAMIAST TEGO EKSPLORUJEMY, TESTUJEMY I ROZWIJAMY SIĘ RAZEM. </p>
            </div>

            <UButton variant="primary" as="nuxt-link" to="/" class="hero-cta">
                Eksploruj
            </UButton>
        </UContainer>
    </section>
</template>

<script setup>
// Brak logiki – czysto prezentacyjny komponent "Hero"
</script>

<style scoped>
.hero-section {
    background: url('/photo-1.jpg') no-repeat center/cover;
    padding: 0 1rem;
    text-align: center;
    min-height: calc(100vh - 82px);
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
}

.hero-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.hero-description {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    color: #333;
}

.hero-cta {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
}
</style>