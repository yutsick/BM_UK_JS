
export default function card({logo, title, scoreValue, scoreText, list, special}) {
  scoreValue = parseFloat(scoreValue);
  let stars =  `<div class="flex items-center text-yellow-500 mb-2 justify-center md:justify-start">
              ${Array.from({ length: 3 }).map(() => `<span class="star star-full"></span>`).join('')} 
              <span class="star star-half"></span> 
              <span class="star star-empty"></span> 
              </div>`;
  if(scoreValue > 9.5)  { 
    stars = `<div class="flex items-center text-yellow-500 mb-2 justify-center md:justify-start">
          ${Array.from({ length: 5 }).map(() => `<span class="star star-full"></span>`).join('')}  
          </div>`
  } else if (scoreValue > 9.0) {
    stars = `<div class="flex items-center text-yellow-500 mb-2 justify-center md:justify-start">
          ${Array.from({ length: 4 }).map(() => `<span class="star star-full"></span>`).join('')} 
          <span class="star star-half"></span> 
          </div>`
  } else if (scoreValue > 8.5) {
    stars = `<div class="flex items-center text-yellow-500 mb-2 justify-center md:justify-start">
          ${Array.from({ length: 4 }).map(() => `<span class="star star-full"></span>`).join('')} 
          <span class="star star-empty"></span> 
          </div>`
  }
  
  return `
    <div class="border-b border-gray-300 bg-white relative hover:bg-[#EAEEFB] hover:cursor-pointer">

      <!-- Content -->
      <div class="flex  md:pt-3">
        <!-- Logo -->
        <div class="  pt-8 pb-3  px-5 md:max-w-[24%] w-[40%] h-auto md:justify-center flex flex-col">
          <img src="./assets/images/${logo}" alt="Logo" class="w-full">
          <!-- Score -->
          <div class="text-center relative w-full md:hidden">
            <div class=" text-[46px] font-rock text-color-base">${scoreValue}</div>
            ${stars}

          </div>
        </div>

        <!-- List -->
        <div class="  pt-8 pb-3 md:max-w-[48%] flex-1 px-2 md-px-0">
          <h3 class="text-[18px] md:text-lg md:font-bold mb-2 font-rock">${title}</h3>
          <div class="hidden md:block">${stars}</div>
          <hr class="md-hidden border-black mb-3 mt-5">
          <a href="#" class="text-color-linkReview text-small font-bold underline ml-5 md:hidden">Full Review</a>
          <ul class="text-sm text-gray-600 space-y-1 mb-2">
             ${list.map(item => `<li class="text-small md:text-base list-item  text-color-grey">${item}</li>`).join('')}
            ${
              special.underline 
              ? `<li class="text-small md:text-base list-item  underline">${special.underline}</li>`
              : ''
            }
            ${
              special.red
              ? `<li class="text-small md:text-base list-item  text-color-red font-bold">${special.red}</li>`
              : ''
              }
            
             
          </ul>
          <a href="#" class="text-color-linkReview text-small font-bold underline ml-5 hidden md:block">Full Review</a>
              
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
        <div class="text-center relative w-full ">
          <div class=" text-[46px] font-rock text-color-base">${scoreValue}</div>
          <div class="text-base bg-background-grey text-color-base py-1 px-2 mx-auto w-fit font-bold">${scoreText}</div>

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

    </div>
  `;
}
