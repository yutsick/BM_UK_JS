
export default function card({ribbon='', logo, title, scoreValue, scoreText, list, offer, hasBanner = false}) {
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
    <div class="border-b-[3px] md:border-b border-[#95A5A6] md:border-gray-300 bg-white relative hover:bg-[#EAEEFB] hover:cursor-pointer">
   
    ${ribbon.length !==0 ? `  
      <div class="ribbon">${ribbon}</div> 
    ` : ''}
      <!-- Content -->
      <div class="flex flex-1 md:py-3">
        <!-- Logo -->
        <div class="${ribbon.length !==0 ? 'pt-[80px] '  : 'pt-[60px]'} ${hasBanner ? 'md:pt-[23px]'  : 'md:pt-0'}  md:pl-4 px-2 max-w-[150px] md:max-w-[160px]  h-auto md:justify-center flex flex-col bg-[#f3f3f3] md:bg-transparent">
          <img src="./assets/images/${logo}" alt="Logo" class="w-full">
          <!-- Score -->
          <div class="text-center relative w-full flex flex-col flex-1 justify-center transform -translate-y-1/4 md:hidden">
            <div class=" text-[38px] leading-[38px]  text-color-base  ">${scoreValue}</div>
            <div class="text-base  text-color-base italic font-semibold">${scoreText}</div>
            ${stars}

          </div>
        </div>

        <!-- List -->
        <div class=" pt-10 md:pt-8 ${hasBanner ? 'pb-20' : 'pb-3'} md:pb-3  flex-1 px-2 md-px-0">
            <div class="md:pl-5">
              <h3 class="text-[17.5px]  font-semibold mb-2 ">${title}</h3>
          
              <hr class="max-w-[330px] md-hidden border-black my-2">
              <div class="hidden md:block">${stars}</div>
            </div>
          
            <ul class="space-y-3 md:space-y-[14px] mb-2">
              ${list.map(item => {
                const [key, value] = Object.entries(item)[0];
                return `<li class="text-[15px] leading-[18px]  list-item text-color-grey"><span class="font-semibold">${key}:&nbsp;</span> ${value}</li>`;
              }).join('')}
          
          
              
              <a href="#" class=" hover:text-black text-color-grey font-medium list-item md:text-[14px] md:leading-[17px] underline  block">Full review page</a>
            </ul>
            
            ${offer && `
              <div class="flex mt-4 mb-3 gap-2">
                <img src="./assets/images/offer-icon.svg" alt="offer" class="h-5 w-5">
                <div class="text-color-red text-[15px] leading-[18px] font-semibold ">${offer}</div>
                
              </div>
            `}    
            <!-- Button -->
            <div class="flex flex-col items-end md:hidden mr-2">
              <a href="#" class=" text-white main-btn   rounded text-[14px] uppercase md:text-[24px] h-10 md:h-[45px] w-[135px] font-semibold md:w-[160px] flex justify-center items-center arrow arrow-white">
                Check Price
              </a>
              <a href="#" class="text-blue-600 text-[14px] mt-3 arrow">Visit Site</a>
            </div>
          </div>
      

      <!-- Scores section-->
      <div class="items-center flex-col mt-10 px-7 space-y-20 hidden md:flex">
        <!-- Score -->
        <div class="text-center relative w-full ">
          <div class=" text-[38px] leading-[38px] text-color-base">${scoreValue}</div>
          <div class="text-base  text-color-base italic font-semibold">${scoreText}</div>

        </div>
      
        
        <!-- Button -->
        <div class="flex flex-col items-center">
          <a href="#" class=" text-white main-btn rounded text-[14px] h-[45px] w-[160px] flex justify-center items-center uppercase arrow arrow-white font-semibold">
            Check Price
          </a>
          <a href="#" class="text-color-blue underline text-sm mt-2 arrow">Visit Site</a>
        </div>
      </div>
    </div>
    <div class="md:ml-[160px]">

    
  
        ${hasBanner ? `
          <!-- Banner -->
          <a href="#" class="shadow-banner mb-3 md:mb-6 text-center font-semibold flex justify-end bg-white absolute z-1 bottom-2 md:relative md:max-w-[525px]   md:h-9  left-8 right-8">
            <div class=" flex-grow  px-1 justify-center flex  py-1 border-dashed border border-background-grey text-color-grey border-r-0 flex-col items-center md:flex-row text-[15px]">
            <span class="hidden md:inline">Get FREE delivery and returns | 365-day trial</span>
            <span class="md:hidden">Get FREE delivery and returns + 365-day trial</span>
            
            </div> 
            <div class="bg-[#E4B200] font-normal flex gap-1 items-center flex-shrink-0 px-2 md:px-4 text-white text-[13px] rounded-e-[5px] group">
            <span class="hidden md:inline">Visit DreamCloud</span>
            <img src="./assets/images/rArr-icon.svg" class="hidden md:block h-6 md:h-3 transform group-hover:translate-x-1 transition">
            <img src="./assets/images/rArr-icon-mob.svg" class="md:hidden h-6 md:h-3 transform group-hover:translate-x-1 transition">
            </div>
          </a>` :''
        }    
       </div>    
    </div>
  `;
}
