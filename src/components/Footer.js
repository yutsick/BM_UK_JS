export default function Footer() {
    return `
     <footer class="bg-[#062036] text-white py-8 sm:py-8 text-sm">
        <div class="container mx-auto px-4">
          <div class="flex flex-col items-center text-center space-y-5">
            <!-- Меню -->
            <ul class="flex flex-wrap justify-center items-center gap-y-2  space-x-3 sm:space-x-0 ">
              <li class="flex items-center">
                <a href="/terms-of-use" rel="nofollow" class="text-white hover:underline text-base">Terms</a>
                <div class="hidden sm:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/privacy" rel="nofollow" class="text-white hover:underline text-base">Privacy Policy</a>
                <div class="hidden sm:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/privacy-rights" rel="nofollow" class="text-white hover:underline text-base">Privacy Rights Policy</a>
                <div class="hidden sm:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/disclaimer" rel="nofollow" class="text-white hover:underline text-base">Disclaimer</a>
                <div class="hidden sm:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/how-we-rate" class="text-white hover:underline text-base">How We Rate</a>
                <div class="hidden sm:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/contact" class="text-white hover:underline text-base">Contact</a>
                <div class="hidden sm:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/about" class="text-white hover:underline text-base">About</a>
              </li>
            </ul>
            <!-- Копірайт -->
            <span class="text-[#5d6c79] text-xs sm:pt-5 sm:mx-auto sm:max-w-xs sm:w-full">
              © 2024 All Rights Reserved
            </span>
          </div>
        </div>
      </footer>

    `;
  }
  