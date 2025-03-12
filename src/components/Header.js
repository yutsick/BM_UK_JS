export default function Header() {
  return `
      
      <header class="border-b-[5px] border-[#545B63] md:border-0 relative bg-cover bg-center text-white">
          
        <div class="h-[150px] md:h-[235px] relative flex justify-end flex-col md:flex-row" >
    
          <img 
          src="./assets/images/top-bg.png" 
          alt="Header background" 
          class="md:w-[50%]  md:max-w-[738px] h-full top-img object-cover"
         
          >
     
          <div 
          class="mx-auto w-full pt-3 md:pt-9 md:px-5 md:pb-7 h-full absolute top-0 left-0 header-overlay">
            <div class="flex justify-between md:justify-start items-start md:items-center  flex-wrap px-2 md:px-0 ">
              <!-- Mobile nav -->
              <button class="block md:hidden " id="mobile-menu-toggle">
                <img src="./assets/images/burger.png">
              </button>
              <a href="/" class=" w-[150px] flex items-center justify-center gap-2 md:hidden">
                <img src="./assets/images/mv-logo.png" alt="Logo" class="w-10 h-10">
                <div class="uppercase text-[14px] text-center font-semibold text-white tracking-[5.5px]">mattress verdict</div>
              </a>

              <!-- Navigation -->
              <nav class="hidden md:flex  text-lg md:relative absolute w-[290px] h-auto md:w-auto bg-[#062036] md:bg-transparent top-4 md:top-0 z-20" id="top-nav">
                <div class="hidden md:flex text-[14px] mr-6 ">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.90506 17.0618C13.5859 17.0618 17.3805 13.2671 17.3805 8.58634C17.3805 3.90551 13.5859 0.110947 8.90506 0.110947C4.22425 0.110947 0.429688 3.90551 0.429688 8.58634C0.429688 13.2671 4.22425 17.0618 8.90506 17.0618ZM14.5016 6.93583L15.3937 6.00011L13.5223 4.21584L12.6301 5.15156L7.8806 10.1332L5.57403 7.86089L4.65303 6.95357L2.83839 8.79559L3.7594 9.70291L7.00216 12.8975L7.93835 13.8198L8.84524 12.8686L14.5016 6.93583Z" fill="#039BE5"/>
                  </svg>
                  <div class="text-white  ml-2">Updated February 2025</div>

                </div>
                <!-- Close button for mobile -->
                <button class="block md:hidden right-2 top-2 absolute z-100" id="mobile-menu-close">
                  <img src="./assets/images/close.png" alt="Close Menu">
                </button>
                <!-- Top 10 Mattresses -->
                <div class="relative mx-6 mx:ml-0 py-4  md:py-0 text-color-linkVisit md:text-white font-bold md:font-normal">
                  <a
                    href="#"
                    class="border-b-4 border-[#4EA3B5] pb-1 text-[14px]"
                  >
                    Top 10 Mattresses
                  </a>
                  
                </div>

                <!-- Best Mattress Types -->
                <div class="group relative pt-4 md:pt-0 border-t border-white md:border-0 mx-6 ">
                  <a
                    href="#"
                    class=" text-[14px]"
                  >
                    Best Mattress Types
                  </a>
                  <!-- Dropdown -->
                  <div
                    class=" md:absolute left-0 top-[19px] mt-2 w-64 text-white md:text-[#062036] md:bg-white md-shadow-lg md:hidden group-hover:flex flex-col z-20 border-t-4 border-[#4EA3B5]"
                  >
                    <ul class="p-4 space-y-2">
                    
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Luxury Mattresses</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Hybrid Mattresses</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Mattresses for Side Sleepers</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Mattresses and Back Pain</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Orthopaedic Mattresses</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Mattresses in a Box</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Memory Foam Mattresses</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Mattresses for Heavy People</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Best Beds, Frames & Bases</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Reviews -->
                <div class="group relative pt-4 md:pt-0 border-t border-white md:border-0 mx-6">
                  <a
                    href="#"
                    class="text-[14px]"
                  >
                    Reviews
                  </a>
                  <!-- Dropdown -->
                  <div
                    class=" md:absolute left-0 top-[19px] mt-2 w-64 text-white md:text-[#062036] md:bg-white md-shadow-lg border-t-4 border-[#4EA3B5] md:hidden group-hover:flex flex-col z-20"
                  >
                    <ul class="p-4 space-y-2">
                    
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">DreamCloud Luxury Hybrid</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Simba</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Nectar Premier Hybrid</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Hypnia</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Lola</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Nectar Memory Foam</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Ergoflex</a>
                      </li>
                      <li>
                        <a href="#" class="block hover:text-[#4EA3B5]">Mattressman UK</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

       

  
            </div>

 
            <div class="text-left hidden md:block max-w-[700px]">
              <h1 class="text-[38px] font-semibold mb-2 ">
              <span class="text-[#E3B321] font-bold">Top 10</span> Mattresses & Back Pain
                 
              </h1>
              <p class="text-[14px] mb-4">
                You will spend a third of your life on a mattress. A good mattress can help with back pain. At MattressVerdict, we test, review, rate, and compare the best mattresses to help you make the right choice online. Discover our top picks below.
              </p>
              <p class="text-[10px] font-light text-[#9FACB8] w-1/3 leading-[14px] lg:w-full">
                Disclosure: We receive referral fees from the brands listed below. <a href="#" class="font-normal underline"  id="openDiscosure">More</a>
              </p>
            </div>
            <div class="md:hidden bg-[#1D1C1C] bg-opacity-60 items-center justify-center h-[50px] w-full flex text-white">Top 10 Best Mattresses UK 2024</div>
          </div>
               
        </div>
          <div class="bg-white py-2 px-4 md:hidden text-black ">
                    Top 10 Mattresses & Back Pain: Below you can find the best mattresses & offers today!
                  <div class="text-color-grey normal-case text-[12px]">
                      <span>Disclosure: We receive referral fees from the brands listed below.</span>
                    <button class="link disclosure-link underline" type="button">More</button>
                  </div>
                </div>
      </header>
    `;
}
