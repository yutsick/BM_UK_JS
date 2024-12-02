
export default function cardFirst({ribbon, logo, title, scoreValue, scoreText, list, special}) {
    return `
      <div class="border-b border-[#95A5A6] md:border-gray-300 md:bg-white relative hover:bg-[#EAEEFB] hover:cursor-pointer">
        <div class="ribbon">${ribbon}</div>
  
        <!-- Content -->
        <div class="flex  md:pt-3">
          <!-- Logo -->
          <div class="  pt-10 md:pt-8 pb-3  px-5 md:max-w-[24%] w-[40%] h-auto md:justify-center flex flex-col bg-[#f3f3f3] md:bg-transparent">
          <img src="./assets/images/${logo}" alt="Logo" class="w-full">
          <!-- Score -->
          <div class="text-center relative w-full md:hidden">
            <div class=" text-[46px] font-rock text-color-base">${scoreValue}</div>
            <div class="flex justify-center items-center text-yellow-500 mb-2">
            ${Array.from({ length: 5 }).map(() => `<span class="star star-full"></span>`).join('')}  
            </div>

          </div>
        </div>
  
          <!-- List -->
          <div class="pt-8 pb-20 md:pb-3 md:max-w-[48%] flex-1 px-2 md-px-0">
            <h3 class="text-lg font-bold mb-2 font-rock">${title}</h3>
            <hr class="md-hidden border-black mb-3 mt-5">
            <div class="items-center text-yellow-500 mb-2 hidden md:flex">
            ${Array.from({ length: 5 }).map(() => `<span class="star star-full"></span>`).join('')}  
            </div>
            <a href="#" class="text-color-linkReview text-small font-bold underline ml-5 md:hidden">Full Review</a>
            <ul class="text-sm text-gray-600 space-y-1 mb-2">
               ${list.map(item => `<li class="list-item font-bold text-color-grey">${item}</li>`).join('')}
              <li class="list-item  text-color-red font-bold">${special}</li>
            </ul>

            <a href="#" class="text-color-linkReview hover:text-black text-small font-bold underline ml-5 hidden md:block">Full Review</a>
              <!-- Button -->
            <div class="flex flex-col items-end md:hidden mr-2 mt-5">
              <a href="#" class=" text-white bg-background-yellow py-2  rounded text-[18px] md:text-[24px] h-10 md:h-[50px] w-[135px] md:w-[160px] flex justify-center items-center arrow arrow-white">
                Check Price
              </a>
              <a href="#" class="text-blue-600 text-sm mt-2 arrow">Visit Site</a>
            </div>
          </div>
        
  
        <!-- Scores section-->
        <div class="items-center flex-col  px-4 space-y-10 hidden md:flex">
          <!-- Score -->
          <div class="text-center relative w-full">
            <div class=" text-[46px] font-rock text-color-base">${scoreValue}</div>
            <div class="text-base bg-background-grey text-color-base py-1 px-2 mx-auto w-fit font-bold">${scoreText}</div>

             <!-- Tooltip -->
                <div class="absolute w-full max-w-[160px] top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-gray-200 text-black text-sm  p-2 rounded shadow-lg">
                    Over <span class="font-bold">690</span> people chose this mattress today
                    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-3 h-3 bg-gray-200 rotate-45"></div>
                </div>

          </div>
        
          
          <!-- Button -->
          <div class="flex flex-col items-center">
            <a href="#" class=" text-white bg-background-yellow py-2  rounded text-[24px] h-[50px] w-[160px] flex justify-center items-center arrow arrow-white">
              Check Price
            </a>
            <a href="#" class="text-blue-600 text-sm mt-2 arrow">Visit Site</a>
          </div>
        </div>
      </div>
  
        <!-- Banner -->
        <a href="#" class="mt-4  text-center  px-4 font-semibold flex justify-end w-full absolute z-1 bottom-2 md:relative">
          <div class=" text-color-linkReview bg-[#EDEDED] flex-grow text-right px-4 justify-end flex space-x-4 py-1 border-dashed border border-background-green border-r-0 flex-col items-center md:flex-row">
            <span> Get FREE delivery and returns </span>
            <span class="tracking-[2px] text-[#545B63] font-rock">365-day trial</span>
          </div> 
           
        
          <div class="bg-background-green font-normal flex gap-1 items-center flex-shrink-0 px-4 text-white text-small rounded-e-[5px] group">
          <span class="hidden md:inline">Visit DreamCloud Website</span>
          <img src="./assets/images/rArr-icon.png" class="h-6 md:h-4 transform group-hover:translate-x-1 transition">
          </div>
        </a>
      </div>
    `;
  }
  