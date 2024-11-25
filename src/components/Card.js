
export default function card({logo, title, scoreValue, scoreText, list, special}) {
  scoreValue = parseFloat(scoreValue);
  let stars =  `<div class="flex items-center text-yellow-500 mb-2">
              ${Array.from({ length: 3 }).map(() => `<span class="star star-full"></span>`).join('')} 
              <span class="star star-half"></span> 
              <span class="star star-empty"></span> 
              </div>`;
  if(scoreValue > 9.5)  { 
    stars = `<div class="flex items-center text-yellow-500 mb-2">
          ${Array.from({ length: 5 }).map(() => `<span class="star star-full"></span>`).join('')}  
          </div>`
  } else if (scoreValue > 9.0) {
    stars = `<div class="flex items-center text-yellow-500 mb-2">
          ${Array.from({ length: 4 }).map(() => `<span class="star star-full"></span>`).join('')} 
          <span class="star star-half"></span> 
          </div>`
  } else if (scoreValue > 8.5) {
    stars = `<div class="flex items-center text-yellow-500 mb-2">
          ${Array.from({ length: 4 }).map(() => `<span class="star star-full"></span>`).join('')} 
          <span class="star star-empty"></span> 
          </div>`
  }
  
  return `
    <div class="border-b border-gray-300 pt-8 pb-3 bg-white relative">

      <!-- Content -->
      <div class="flex  mt-3">
        <!-- Logo -->
        <div class=" px-5 max-w-[24%] h-auto items-center flex">
          <img src="./assets/images/${logo}" alt="Logo" class="w-full">
        </div>

        <!-- List -->
        <div class="max-w-[48%]">
          <h3 class="text-lg font-bold mb-2 font-rock">${title}</h3>
          ${stars}
          <ul class="text-sm text-gray-600 space-y-1 mb-2">
             ${list.map(item => `<li class="list-item  text-color-grey">${item}</li>`).join('')}
            ${
              special.underline 
              ? `<li class="list-item  underline">${special.underline}</li>`
              : ''
            }
            ${
              special.red
              ? `<li class="list-item  text-color-red font-bold">${special.red}</li>`
              : ''
              }
            
             
          </ul>
          <a href="#" class="text-color-linkReview text-small font-bold underline ml-5">Full Review</a>
        </div>
      

      <!-- Scores section-->
      <div class="flex  items-center flex-col flex-grow px-4 space-y-10">
        <!-- Score -->
        <div class="text-center relative w-full">
          <div class=" text-[46px] font-rock text-color-base">${scoreValue}</div>
          <div class="text-base bg-background-grey text-color-base py-1 px-2 mx-auto w-fit font-bold">${scoreText}</div>

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

    </div>
  `;
}
