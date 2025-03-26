<template>
    <!-- Klikając na mapę słów (SVG) przeliczamy nowe pozycje -->
    <svg :viewBox="viewBox" class="word-cloud-svg" @click="recalculate">
        <!-- Grupujemy elementy, by wycentrować chmurę -->
        <g :transform="translateSvg">
            <template v-for="word in computedWords" :key="word.text">
                <!-- Używamy bindingu style do ustawiania transform, co umożliwia animację -->
                <text class="word" :style="{
                    transform: 'translate(' + word.x + 'px, ' + word.y + 'px) rotate(' + word.rotate + 'deg)',
                    fontSize: word.size + 'px',
                    fill: getColor(word.text)
                }">
                    {{ word.text }}
                </text>
            </template>
        </g>
    </svg>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'
import { ref, computed, onMounted } from 'vue'
import cloud from 'd3-cloud'

const words = [
    { text: "Adaptacja", size: 26 },
    { text: "Animal Movement", size: 15 },
    { text: "Balans", size: 12 },
    { text: "Capoeira", size: 25 },
    { text: "Ciało", size: 24 },
    { text: "Dynamika", size: 32 },
    { text: "Eksperymentowanie", size: 17 },
    { text: "Eksploracja Ciała", size: 26 },
    { text: "Eksploracja", size: 32 },
    { text: "Elastyczność", size: 16 },
    { text: "Elastyczność", size: 31 },
    { text: "Flow", size: 38 },
    { text: "Gimnastyka", size: 25 },
    { text: "Gra", size: 25 },
    { text: "Improwizacja", size: 13 },
    { text: "Improwizacja", size: 18 },
    { text: "Integracja", size: 23 },
    { text: "Interakcja", size: 14 },
    { text: "Intuicja", size: 23 },
    { text: "Joga", size: 35 },
    { text: "Kalistenika", size: 14 },
    { text: "Kontrola", size: 12 },
    { text: "Koordynacja", size: 30 },
    { text: "Kółka Gimnastyczne", size: 26 },
    { text: "Miękka Akrobatyka", size: 26 },
    { text: "Mobilność", size: 14 },
    { text: "Movement", size: 40 },
    { text: "Naturalność", size: 8 },
    { text: "Oddech", size: 32 },
    { text: "Organiczność", size: 18 },
    { text: "Parkour", size: 25 },
    { text: "Percepcja", size: 13 },
    { text: "Połączenie", size: 17 },
    { text: "Precyzja", size: 11 },
    { text: "Przestrzeń", size: 12 },
    { text: "Pęd", size: 28 },
    { text: "Płynność", size: 30 },
    { text: "Qigong", size: 32 },
    { text: "Ruch", size: 40 },
    { text: "Równowaga", size: 26 },
    { text: "Siła Funkcjonalna", size: 13 },
    { text: "Siła", size: 23 },
    { text: "Spontaniczność", size: 19 },
    { text: "Swoboda Ruchu", size: 18 },
    { text: "Sztuki Walki", size: 24 },
    { text: "Taniec", size: 15 },
    { text: "Układ Nerwowy", size: 15 },
    { text: "Zabawa", size: 17 },
    { text: "Zmysły", size: 22 },
    { text: "Zwinność", size: 24 },
]

const { width: windowWidth } = useWindowSize()

const width = ref(800)
const height = ref(600)
const translateSvg = ref("translate(0, 0)")

onMounted(() => {
    if (windowWidth.value < 768) {
        translateSvg.value = "translate(150, 400)"
        width.value = 300
        height.value = 800
    } else {
        translateSvg.value = "translate(400, 200)"
        width.value = 800
        height.value = 400
    }

    calculateLayout()
})

// ViewBox dynamicznie dostosowuje się w zależności od szerokości okna
const viewBox = computed(() => {
    if (windowWidth.value < 768) {
        // Na urządzeniach mobilnych chmura słów ma proporcje pionowe
        return `0 0 ${width.value} ${height.value}`
    } else {
        // Na desktopie chmura słów ma proporcje poziome
        return `0 0 ${width.value} ${height.value}`
    }
})

// Reactive zmienna przechowująca wynik obliczeń układu
const layoutWords = ref([])

// Rule 5: Obliczenia pozycji słów udostępniamy przez computed
const computedWords = computed(() => layoutWords.value)

// Funkcja wykonująca obliczenia pozycji słów przy użyciu d3-cloud
function calculateLayout() {
    cloud()
        .size([width.value, height.value])  // Dostosowanie rozmiaru do wartości width i height
        .words(words.map(d => ({ ...d })))
        .padding(3)
        .rotate(() => Math.random() * 40 - 20)
        .font("Impact")
        .fontSize(d => d.size)
        .on("end", words => {
            layoutWords.value = words
        })
        .start()
}

function recalculate() {
    calculateLayout()
}

function getColor(text) {
    const colors = [
        "#6d8f43",
        "#b6c1ca",
        "#91899b",
        "#b0a079",
        "#659287",
        "#bfa143",
        "#eed5a3",
        "#5b506f",
        "#9cb2ca",
        "#305a9b",
        "#686C59",
        "#a0b395",
    ]
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
}
</script>

<style scoped>
.word-cloud-svg {
    display: block;
    width: 100%;
    height: auto;
    cursor: pointer;
}

.word {
    font-family: Impact, sans-serif;
    text-anchor: middle;
    transition: transform 0.5s ease;
}
</style>
