<template>
    <!-- Klikając na mapę słów (SVG) przeliczamy nowe pozycje -->
    <svg viewBox="0 0 800 600" class="word-cloud-svg" @click="recalculate">
        <!-- Grupujemy elementy, by wycentrować chmurę -->
        <g transform="translate(400,300)">
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
import { ref, computed, watch } from 'vue'
import cloud from 'd3-cloud'

const props = defineProps({
    words: {
        type: Array,
        default: () => ([
            { text: "Gra", size: 25 },
            { text: "Ruch", size: 40 },
            { text: "Siła", size: 23 },
            { text: "Flow", size: 44 },
            { text: "Joga", size: 35 },
            { text: "Ciało", size: 24 },
            { text: "Oddech", size: 32 },
            { text: "Balans", size: 12 },
            { text: "Zabawa", size: 17 },
            { text: "Kółka Gimnastyczne", size: 28 },
            { text: "Taniec", size: 15 },
            { text: "Qigong", size: 32 },
            { text: "Zmysły", size: 22 },
            { text: "Parkour", size: 25 },
            { text: "Movement", size: 60 },
            { text: "Płynność", size: 41 },
            { text: "Zwinność", size: 24 },
            { text: "Kontrola", size: 7 },
            { text: "Elastyczność", size: 31 },
            { text: "Intuicja", size: 6 },
            { text: "Dynamika", size: 38 },
            { text: "Capoeira", size: 25 },
            { text: "Precyzja", size: 11 },
            { text: "Mobilność", size: 14 },
            { text: "Równowaga", size: 9 },
            { text: "Adaptacja", size: 26 },
            { text: "Percepcja", size: 13 },
            { text: "Świadomość", size: 10 },
            { text: "Integracja", size: 23 },
            { text: "Interakcja", size: 14 },
            { text: "Gimnastyka", size: 25 },
            { text: "Przestrzeń", size: 12 },
            { text: "Połączenie", size: 17 },
            { text: "Koordynacja", size: 42 },
            { text: "Eksploracja", size: 32 },
            { text: "Naturalność", size: 8 },
            { text: "Animal Movement", size: 15 },
            { text: "Kalistenika", size: 10 },
            { text: "Improwizacja", size: 18 },
            { text: "Sztuki Walki", size: 24 },
            { text: "Elastyczność", size: 16 },
            { text: "Organiczność", size: 18 },
            { text: "Układ Nerwowy", size: 19 },
            { text: "Spontaniczność", size: 19 },
            { text: "Eksploracja Ciała", size: 26 },
            { text: "Siła Funkcjonalna", size: 8 },
            { text: "Eksperymentowanie", size: 17 },
            { text: "Miękka Akrobatyka", size: 26 },
            { text: "Improwizacja", size: 13 },
            { text: "Swoboda Ruchu", size: 18 }
        ])
    },
    width: {
        type: Number,
        default: 800
    },
    height: {
        type: Number,
        default: 600
    }
})

// Reactive zmienna przechowująca wynik obliczeń układu
const layoutWords = ref([])

// Rule 5: Obliczenia pozycji słów udostępniamy przez computed
const computedWords = computed(() => layoutWords.value)

// Funkcja wykonująca obliczenia pozycji słów przy użyciu d3-cloud
function calculateLayout() {
    cloud()
        .size([props.width, props.height])
        .words(props.words.map(d => ({ ...d })))
        .padding(2)
        .rotate(() => Math.random() * 40 - 20)
        .font("Impact")
        .fontSize(d => d.size)
        .on("end", words => {
            layoutWords.value = words
        })
        .start()
}

watch(() => props.words, () => {
    calculateLayout()
}, { immediate: true })


function recalculate() {
    calculateLayout()
}

function getColor(text) {
    const colors = [
        "#659287", 
        "#b6c1ca", 
        "#6d8f43", 
        "#bfa143", 
        "#91899b", 
        "#b0a079", 
        "#eed5a3", 
        "#5b506f", 
        "#305a9b", 
        "#9cb2ca",
        "#a0b395", 
        "#686C59", 
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
