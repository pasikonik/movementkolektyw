<template>
    <div class="flex flex-col justify-center items-center py-8 px-0">

        <h1 class="text-4xl font-bold text-center mb-8">Zajęcia</h1>

        <table class="bg-white table-fixed w-full md:w-md">
            <thead>
                <tr>
                    <th class="border-b"></th>
                    <th class="py-2 px-4 border-b">Godzina</th>
                    <th class="py-2 px-4 border-b">Blok</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="pt-30 pl-3 bg-orange-400 border-b border-l" rowspan="5">
                        <div
                            class="text-2xl inline-block transform origin-top-left -rotate-90 w-full h-full flex items-center justify-center uppercase">
                            Wtorek</div>
                    </td>
                    <td class="py-2 px-4 text-lg bg-orange-300 border text-center" rowspan="5">
                        <div class="uppercase font-bold">Movement</div>
                        <div>18:45-20:15</div>
                    </td>
                    <td class="py-2 px-4 bg-orange-100 border-b border-r">Rozgrzewka</td>
                </tr>
                <tr class="bg-orange-100">
                    <td class="py-2 px-4 border-b border-r">Nogi - dynamika</td>
                </tr>
                <tr class="bg-orange-100">
                    <td class="py-2 px-4 border-b border-r">Lokomocje</td>
                </tr>
                <tr class="bg-orange-100">
                    <td class="py-2 px-4 border-b border-r">Ringi</td>
                </tr>
                <tr class="bg-orange-100">
                    <td class="py-2 px-4 border-b border-r">Relaks</td>
                </tr>
                <tr>
                    <td class="pt-6 pl-3 bg-green-400 border-b border-l" rowspan="8">
                        <div
                            class="text-2xl inline-block transform origin-top-left -rotate-90 w-full h-full flex items-center justify-center uppercase">
                            Czwartek</div>
                    </td>
                    <td class="py-2 px-4 text-lg bg-green-300 border text-center" rowspan="2">
                        <div class="uppercase font-bold">Handstand</div>
                        <div>17:30-18:30</div>
                    </td>
                    <td class="py-2 px-4 bg-green-100 border-b border-r">Rozgrzewka</td>
                </tr>
                <tr class="bg-green-100">
                    <td class="py-2 px-4 border-b border-r">Praktyka</td>
                </tr>
                <tr class="bg-green-300">
                    <td class="py-2 px-4 text-lg border text-center" rowspan="6">
                        <div class="uppercase font-bold">Movement</div>
                        <div>18:45-20:15</div>
                    </td>
                    <td class="py-2 px-4 bg-green-100 border-b border-r">Rozgrzewka</td>
                </tr>
                <tr class="bg-green-100">
                    <td class="py-2 px-4 border-b border-r">Sekwencje</td>
                </tr>
                <tr class="bg-green-100">
                    <td class="py-2 px-4 border-b border-r">Improwizacja</td>
                </tr>
                <tr class="bg-green-100">
                    <td class="py-2 px-4 border-b border-r">Ręce - siła</td>
                </tr>
                <tr class="bg-green-100">
                    <td class="py-2 px-4 border-b border-r">Mobilność</td>
                </tr>
                <tr class="bg-green-100">
                    <td class="py-2 px-4 border-b border-r">Relaks</td>
                </tr>
            </tbody>
        </table>


        <div class="mt-2 font-semibold text-lg">Plan na: 3-4.2025</div>

        <div class="p-10">
            <h3 class="text-2xl text-center font-bold mb-2">
                A gdzie? A tu:
            </h3>
            <div class="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/1000/svg" class="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <a href="https://maps.app.goo.gl/rdUvGnu2DjSosHtv7" target="_blank"
                    class="text-gray-700 font-medium hover:text-green-600 transition duration-100">
                    ul. Wielka 19/8 <br> 61-775 Poznań, Polska
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
td:first-child,
th:first-child {
    width: 40px;
}

td:nth-child(even),
th:nth-child(even) {
    width: 160px;
}

td:last-child,
th:last-child {
    width: 110px;
}
</style>