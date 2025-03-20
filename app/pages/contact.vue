<template>
    <div class="flex justify-center items-center h-fit mt-8">
        <div class="max-w-sm mx-auto h-full py-12 px-10 bg-white rounded-lg border border-gray-200">
            <div class="space-y-4 mb-8">
                <div class="flex items-center space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <a href="https://maps.app.goo.gl/rdUvGnu2DjSosHtv7" target="_blank"
                        class="text-gray-700 font-medium hover:text-green-600 transition duration-200">
                        ul. Wielka 19/8 <br>
                        61-775 Poznań, Polska
                    </a>
                </div>
                <div class="flex items-start space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div class="text-gray-600">
                        <p><strong>Wtorek:</strong> 18:45 - 20:15</p>
                        <p><strong>Czwartek:</strong> 17:30 - 20:15</p>
                    </div>
                </div>
            </div>

            <h2 class="text-2xl font-bold text-gray-800 mb-4 mt-8 flex items-center">
                Kontakt elektroniczny
            </h2>
            <div class="space-y-2">
                <div class="flex items-center space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:movementkolektyw@gmail.com"
                        class="text-gray-600 hover:text-gray-800">movementkolektyw@gmail.com</a>
                </div>


                <div class="flex items-center space-x-4">
                    <UIcon name="fa-brands:instagram" alt="Instagram" class="w-6 h-6 inline-block" />
                    <a href="https://www.instagram.com/movement_kolektyw" target="_blank">@movement_kolektyw</a>
                </div>


                <div class="flex items-center space-x-4">
                    <UIcon name="fa-brands:facebook-square" alt="Facebook" class="w-6 h-6 inline-block" />
                    <a href="https://www.facebook.com/movementkolektyw" target="_blank">@movementkolektyw</a>
                </div>
            </div>
        </div>
    </div>
</template>