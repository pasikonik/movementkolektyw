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
/* Podstawowe style dla hero – możesz je dostosować wg własnego designu. */

/* Tło sekcji hero */
.hero-section {
    background: url('/photo-1.jpg') no-repeat center/cover;
    /* Pastelowy, łagodny kolor – kojarzący się ze zdrowiem */
    padding: 0 1rem;
    /* Duży odstęp góra/dół; mały po bokach */
    text-align: center;
    /* Wyrównanie do środka */
    min-height: calc(100vh - 82px);
}

/* Zawartość w kontenerze */
.hero-content {
    max-width: 800px;
    /* Maksymalna szerokość, by treść była czytelna */
    margin: 0 auto;
    /* Wyśrodkowanie */

    height: 100%;
    display: flexbox;
    align-items: center;
}

/* Nagłówek – możesz np. zwiększyć rozmiar czcionki */
.hero-title {
    font-size: 2.5rem;
    /* Większy rozmiar tekstu */
    font-weight: bold;
    margin-bottom: 1rem;
}

/* Krótki opis pod tytułem */
.hero-description {
    font-size: 1.125rem;
    /* Trochę większy niż standardowy */
    margin-bottom: 2rem;
    line-height: 1.6;
    color: #333;
}

/* Przycisk CTA */
.hero-cta {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
}
</style>