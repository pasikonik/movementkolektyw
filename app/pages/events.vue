<script setup>
import { ref, computed } from 'vue';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

useSeoMeta({
  title: 'Movement w Poznaniu - Aktualne Wydarzenia i Otwarte Treningi',
  description: 'Chcesz poruszać się z nami? Sprawdź listę nadchodzących spotkań i warsztatów naszej poznańskiej społeczności movement.',
})

const typeStyleMap = {
    outdoor: {
        backgroundColor: '#bbf7d0', // green-100
        color: '#166534',           // green-800
    },
    warsztat: {
        backgroundColor: '#dbeafe', // blue-100
        color: '#1e40af',           // blue-800
    },
};

function getBadgeStyle(type) {
    const style = typeStyleMap[type] ?? {
        backgroundColor: '#e5e7eb', // gray-100
        color: '#1f2937',           // gray-800
    };

    return {
        backgroundColor: style.backgroundColor,
        color: style.color,
    };
}

const events = ref([
    {
        date: new Date('2025-04-27'),
        title: 'Ciężar, pęd i przestrzeń',
        presenter: 'Tomasz Koszan',
        description: '',
        type: 'warsztat',
    },
    {
        date: new Date('2025-01-05'),
        title: '4 Filary Ruchu',
        presenter: 'Filip Droszcz',
        description: '',
        type: 'warsztat',
    },
    {
        date: new Date('2024-05-26'),
        title: 'Primal Therapy',
        presenter: 'Maciej Borucz',
        description: '',
        type: 'warsztat',
    },
    {
        date: new Date('2024-08-25'),
        title: 'Soft Acrobatics',
        presenter: 'Lena Skrzypczak',
        description: '',
        type: 'warsztat',
    },
    {
        date: new Date('2024-09-01'),
        title: 'Piknik Ruchowy Cytadela',
        presenter: 'Movement Kolektyw',
        description: '',
        type: 'outdoor'
    },
    {
        date: new Date('2024-11-16'),
        title: 'Floorwork & Partnerowanie',
        presenter: 'Katarzyna Paluch',
        description: '',
        type: 'warsztat',
    },
]);

const currentDate = new Date();

const sortedEvents = computed(() => {
    return [...events.value].sort((a, b) => b.date.getTime() - a.date.getTime());
});

const futureEvents = computed(() => {
    return sortedEvents.value.filter(event => event.date >= currentDate);
});

const pastEvents = computed(() => {
    return sortedEvents.value.filter(event => event.date < currentDate);
});
</script>

<template>
    <UContainer class="flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold my-12 text-center md:text-left">Nadchodzące i minione wydarzenia</h1>
        <ol class="relative border-s border-gray-200">
            <template v-if="futureEvents.length > 0">
                <li v-for="event in futureEvents" :key="event.title" class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5  bg-orange-300" />
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                        {{ format(event.date, 'd MMMM y', { locale: pl }) }}
                    </time>
                    <div class="flex items-center gap-2 mb-1">
                        <h3 class="text-lg font-semibold text-gray-900">{{ event.title }}</h3>
                        <span class="text-xs font-semibold tracking-wider px-2 py-1 rounded-sm"
                            :style="getBadgeStyle(event.type)">
                            {{ event.type }}
                        </span>
                    </div>
                    <p class="mb-4 text-base font-normal text-gray-500">
                        Prowadzący: <span class="font-semibold">{{ event.presenter }}</span><br>
                        {{ event.description }}
                    </p>
                    <UButton v-if="event.link" :href="event.link" target="_blank" color="primary" size="sm">
                        Dowiedz się więcej
                        <UIcon name="heroicons-solid:arrow-right" class="w-4 h-4 ms-2 rtl:rotate-180" />
                    </UButton>
                </li>
                <li v-if="pastEvents.length > 0" class="relative ms-6">
                    <div class="absolute w-6 h-px bg-gray-200 top-1/2 left-0 -translate-x-[24px]" />
                    <div class="mb-8">
                        <span
                            class="inline-block px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-100 rounded-full">
                            Teraz
                        </span>
                    </div>
                </li>
            </template>
            <template v-if="pastEvents.length > 0">
                <li v-for="event in pastEvents" :key="event.title" class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-green-500 " />
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 ">
                        {{ format(event.date, 'd MMMM y', { locale: pl }) }}
                    </time>
                    <div class="flex items-center gap-2 mb-1">
                        <h3 class="text-lg font-semibold text-gray-900">{{ event.title }}</h3>
                        <span class="text-xs font-semibold tracking-wider px-2 py-1 rounded-sm"
                            :style="getBadgeStyle(event.type)">
                            {{ event.type }}
                        </span>
                    </div>
                    <p class="mb-4 text-base font-normal text-gray-500">
                        Prowadzący: <span class="font-semibold">{{ event.presenter }}</span><br>
                        {{ event.description }}
                    </p>
                    <UButton v-if="event.link" :href="event.link" target="_blank" color="gray" size="sm">
                        Zobacz więcej
                        <UIcon name="heroicons-solid:eye" class="w-4 h-4 ms-2 rtl:rotate-180" />
                    </UButton>
                </li>
            </template>
            <template v-if="futureEvents.length === 0 && pastEvents.length === 0">
                <li class="ms-4">
                    <p class="text-gray-500">Brak wydarzeń do wyświetlenia.</p>
                </li>
            </template>
        </ol>
    </UContainer>
</template>




