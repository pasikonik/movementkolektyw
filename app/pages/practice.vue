<template>
    <div class="flex flex-col justify-center items-center p-8">
        <div class="text-lg">Plan na: 3-4.2025</div>

        <table class=" bg-white">
            <thead>
                <tr>
                    <th class="py-2 px-4 border-b"></th>
                    <th class="py-2 px-4 border-b">Godzina</th>
                    <th class="py-2 px-4 border-b">Blok</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-orange-200">
                    <td class="py-2 px-4 border-b border-l" rowspan="5">
                        <div class="text-xl inline-block transform origin-top-left -rotate-90">Wtorek</div>
                    </td>
                    <td class="py-2 px-4 border-b" rowspan="5">
                        <div>Movement</div>
                        <div>18:45-20:15</div>
                    </td>
                    <td class="py-2 px-4 border-b border-r">Rozgrzewka</td>
                </tr>
                <tr class="bg-orange-200">
                    <td class="py-2 px-4 border-b border-r">Nogi - dynamika</td>
                </tr>
                <tr class="bg-orange-200">
                    <td class="py-2 px-4 border-b border-r">Flow</td>
                </tr>
                <tr class="bg-orange-200">
                    <td class="py-2 px-4 border-b border-r">Ringi</td>
                </tr>
                <tr class="bg-orange-200">
                    <td class="py-2 px-4 border-b border-r">Relaks</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b border-l" rowspan="8">
                        <div class="text-xl inline-block transform origin-top-left -rotate-90">Czwartek</div>
                    </td>
                    <td class="py-2 px-4 border-b" rowspan="2">
                        <div>Handstand</div>
                        <div>17:30-18:30</div>
                    </td>
                    <td class="py-2 px-4 border-b border-r">Rozgrzewka</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b border-r">Praktyka</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b" rowspan="6">
                        <div>Movement</div>
                        <div>18:45-20:15</div>
                    </td>
                    <td class="py-2 px-4 border-b border-r">Rozgrzewka</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b border-r">Lokomocje</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b border-r">Improwizacja</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b border-r">Ręce - siła</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b border-r">Mobility</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b border-r">Relaks</td>
                </tr>
            </tbody>
        </table>


        <div class="location p-10">
            <div class="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <a href="https://maps.app.goo.gl/rdUvGnu2DjSosHtv7" target="_blank"
                    class="text-gray-700 font-medium hover:text-green-600 transition duration-200">
                    ul. Wielka 19/8 <br> 61-775 Poznań, Polska
                </a>
            </div>
        </div>
    </div>
</template>