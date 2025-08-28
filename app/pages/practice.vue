<template>
  <div class="flex flex-col justify-center items-center py-8 px-0">
    <h1 class="text-4xl font-bold text-center mb-8">Treningi</h1>

    <table class="bg-white table-fixed w-full md:w-md">
      <thead>
        <tr>
          <th class="border-b" />
          <th class="py-2 px-4 border-b">Godzina</th>
          <th class="py-2 px-4 border-b">Blok</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="pt-30 pl-3 bg-orange-400 border-b border-l" rowspan="5">
            <div class="text-2xl inline-block transform origin-[30%_5%] -rotate-90 w-full h-full uppercase">
              Wtorek
            </div>
          </td>
          <td class="py-2 px-4 text-lg bg-orange-300 border text-center" rowspan="6">
            <div class="uppercase font-bold">Movement</div>
            <div>18:45-20:15</div>
          </td>
          <td class="py-2 px-4 bg-orange-100 border-b border-r text-sm">
            Rozgrzewka
          </td>
        </tr>
        <tr class="bg-orange-100">
          <td class="py-2 px-4 border-b border-r text-sm">Partering</td>
        </tr>
        <tr class="bg-orange-100">
          <td class="py-2 px-4 border-b border-r text-sm">Floorwork</td>
        </tr>
        <tr class="bg-orange-100">
          <td class="py-2 px-4 border-b border-r text-sm">Skin the cat</td>
        </tr>
        <tr class="bg-orange-100">
          <td class="py-2 px-4 border-b border-r text-sm">Relaks</td>
        </tr>
        <tr>
          <td class="pt-6 pl-3 bg-green-400 border-b border-l" rowspan="6">
            <div class="text-2xl inline-block transform origin-[75%_65%] -rotate-90 w-full h-full uppercase">
              Czwartek
            </div>
          </td>
        </tr>
        <tr class="bg-green-300">
          <td class="py-2 px-4 text-lg border text-center" rowspan="5">
            <div class="uppercase font-bold">Movement</div>
            <div>18:45-20:15</div>
          </td>
          <td class="py-2 px-4 bg-green-100 border-b border-r text-sm">
            Ropeflow
          </td>
        </tr>
        <tr class="bg-green-100">
          <td class="py-2 px-4 border-b border-r text-sm">Rozgrzewka</td>
        </tr>
        <tr class="bg-green-100">
          <td class="py-2 px-4 border-b border-r text-sm">Miękka akrobatyka</td>
        </tr>
        <tr class="bg-green-100">
          <td class="py-2 px-4 border-b border-r text-sm">Mobilność i siła</td>
        </tr>
        <tr class="bg-green-100">
          <td class="py-2 px-4 border-b border-r text-sm">Relaks</td>
        </tr>
        <tr class="text-center">
          <td class="py-2 px-4 mt-2 font-md text-lg border" colspan="3">
            Plan na: wrzesień-październik 2025
          </td>
        </tr>
      </tbody>
    </table>

    <div class="p-10">
      <h4 class="text-xl font-semibold mb-2">Studio Movement Poznań</h4>
      <div class="flex items-center space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <a href="https://maps.app.goo.gl/rdUvGnu2DjSosHtv7" target="_blank"
          class="text-gray-700 font-medium hover:text-green-600 transition duration-100">
          ul. Wielka 19/8 <br />
          61-775 Poznań, Polska
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
