<template>
    <div class="flex flex-col justify-center items-center p-8">
        <table class=" bg-white border border-gray-300">
            <thead>
                <tr class="bg-gray-200">
                    <th class="py-2 px-4 border-b"></th>
                    <th class="py-2 px-4 border-b">Nr</th>
                    <th class="py-2 px-4 border-b">Blok</th>
                    <th class="py-2 px-4 border-b">Prowadzący</th>
                    <th class="py-2 px-4 border-b">Długość</th>
                    <th class="py-2 px-4 border-b">Przedział</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-orange-200">
                    <td class="py-2 px-4 border-b" rowspan="5">
                        <div class="inline-block transform origin-top-left -rotate-90">Wtorek</div>
                    </td>
                    <td class="py-2 px-4 border-b">1.</td>
                    <td class="py-2 px-4 border-b">Rozgrzewka</td>
                    <td class="py-2 px-4 border-b">Joasia</td>
                    <td class="py-2 px-4 border-b">15 min</td>
                    <td class="py-2 px-4 border-b">18:45-19:00</td>
                </tr>
                <tr class="bg-orange-200">
                    <td class="py-2 px-4 border-b">2.</td>
                    <td class="py-2 px-4 border-b">Kopnięcia</td>
                    <td class="py-2 px-4 border-b">Gzesiu</td>
                    <td class="py-2 px-4 border-b">20 min</td>
                    <td class="py-2 px-4 border-b">19:00-19:20</td>
                </tr>
                <tr class="bg-orange-200">
                    <td class="py-2 px-4 border-b">3.</td>
                    <td class="py-2 px-4 border-b">Flow</td>
                    <td class="py-2 px-4 border-b">Olej</td>
                    <td class="py-2 px-4 border-b">25 min</td>
                    <td class="py-2 px-4 border-b">19:20-19:45</td>
                </tr>
                <tr class="bg-orange-200">
                    <td class="py-2 px-4 border-b">4.</td>
                    <td class="py-2 px-4 border-b">Ringi</td>
                    <td class="py-2 px-4 border-b">Szymon</td>
                    <td class="py-2 px-4 border-b">30 min</td>
                    <td class="py-2 px-4 border-b">19:45-20:15</td>
                </tr>
                <tr class="bg-orange-200">
                    <td class="py-2 px-4 border-b">5.</td>
                    <td class="py-2 px-4 border-b">Relaks</td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">5 min</td>
                    <td class="py-2 px-4 border-b">20:15-20:20</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b" rowspan="6">
                        <div class="inline-block transform origin-top-left -rotate-90">Czwartek</div>
                    </td>
                    <td class="py-2 px-4 border-b">1.</td>
                    <td class="py-2 px-4 border-b">Rozgrzewka</td>
                    <td class="py-2 px-4 border-b">Paweł</td>
                    <td class="py-2 px-4 border-b">20 min</td>
                    <td class="py-2 px-4 border-b">18:45-19:05</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b">2.</td>
                    <td class="py-2 px-4 border-b">Lokomocje</td>
                    <td class="py-2 px-4 border-b">Olej</td>
                    <td class="py-2 px-4 border-b">20 min</td>
                    <td class="py-2 px-4 border-b">19:05-19:25</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b">3.</td>
                    <td class="py-2 px-4 border-b">Impro</td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">10 min</td>
                    <td class="py-2 px-4 border-b">19:25-19:35</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b">4.</td>
                    <td class="py-2 px-4 border-b">Pompki</td>
                    <td class="py-2 px-4 border-b">Edyta</td>
                    <td class="py-2 px-4 border-b">15 min</td>
                    <td class="py-2 px-4 border-b">19:35-19:50</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b">5.</td>
                    <td class="py-2 px-4 border-b">Mobility</td>
                    <td class="py-2 px-4 border-b">Karol</td>
                    <td class="py-2 px-4 border-b">20 min</td>
                    <td class="py-2 px-4 border-b">19:50-20:10</td>
                </tr>
                <tr class="bg-green-200">
                    <td class="py-2 px-4 border-b">6.</td>
                    <td class="py-2 px-4 border-b">Relaks</td>
                    <td class="py-2 px-4 border-b"></td>
                    <td class="py-2 px-4 border-b">5 min</td>
                    <td class="py-2 px-4 border-b">20:10-20:15</td>
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
                    ul. Wielka 19/8, 61-775 Poznań, Polska
                </a>
            </div>
        </div>
    </div>
</template>