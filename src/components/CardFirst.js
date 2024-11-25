
export default function cardFirst({ribbon, logo, title, scoreValue, scoreText, list, special}) {
    return `
      <div class="border-b border-gray-300 pt-8 pb-3 bg-white relative">
        <div class="ribbon">${ribbon}</div>
  
        <!-- Content -->
        <div class="flex  mt-3">
          <!-- Logo -->
          <div class=" px-5 max-w-[24%] h-auto items-center flex">
            <img src="/assets/images/${logo}" alt="DreamCloud Logo" class="w-full">
          </div>
  
          <!-- List -->
          <div class="max-w-[48%]">
            <h3 class="text-lg font-bold mb-2 font-rock">${title}</h3>
            <div class="flex items-center text-yellow-500 mb-2">
            ${Array.from({ length: 5 }).map(() => `<span class="star star-full"></span>`).join('')}  
            </div>
            <ul class="text-sm text-gray-600 space-y-1 mb-2">
               ${list.map(item => `<li class="list-item font-bold text-color-grey">${item}</li>`).join('')}
              <li class="list-item  text-color-red font-bold">${special}</li>
            </ul>
            <a href="#" class="text-color-linkReview text-small font-bold underline ml-5">Full Review</a>
          </div>
        
  
        <!-- Scores section-->
        <div class="flex  items-center flex-col flex-grow px-4 space-y-10">
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
            <a href="#" class=" text-white bg-background-yellow py-2  rounded text-[24px] h-[50px] w-[160px] flex justify-center items-center ">
              Check Price »
            </a>
            <a href="#" class="text-blue-600 text-sm mt-2">Visit Site »</a>
          </div>
        </div>
      </div>
  
        <!-- Banner -->
        <a class="mt-4  text-center  px-4 font-semibold flex justify-end w-full ">
          <div class=" text-color-linkReview bg-gray-300 flex-grow text-right px-4 justify-end flex space-x-4 py-1 border-dashed border border-background-green border-r-0">
            <span> Get FREE delivery and returns </span>
            <span class="tracking-[2px] text-gray-600 font-rock">365-day trial</span>
          </div> 
           
          <div class="bg-background-green font-normal flex items-center flex-shrink-0 px-4 text-white text-small">Visit DreamCloud Website »</div>
        </a>
      </div>
    `;
  }
  