export default function Header() {
    return `
      <header class="border-b-[5px] border-[#545B63] md:border-0 relative bg-cover bg-center text-white" style="background-image: url('./assets/images/top-bg.jpg');">
        <div class="bg-black bg-opacity-50">
          <div class="container mx-auto md:px-6 md:py-5 pt-3">
            
            <div class="flex  items-start md:items-center mb-8 flex-wrap px-2 md:px-0">
              <!-- Mobile nav -->
              <button class="block md:hidden " id="mobile-menu-toggle">
                <img src="./assets/images/burger.png">
              </button>



              <!-- Logo -->
              <div class="flex items-center gap-1 mb-4 md:mb-0">
                <div class="text-black font-bold text-lg  rounded">
                  <img src="./assets/images/mv-logo.png" alt="Mattress Verdict Logo">
                </div>
                <span class="font-semibold tracking-[3px] w-[95px] text-center leading-[20px] text-sm uppercase">
                  Mattress Verdict
                </span>
              </div>

              <!-- Navigation -->
              <nav class="hidden md:flex  text-lg md:relative absolute w-[290px] h-auto md:w-auto bg-[#062036] md:bg-transparent top-4 md:top-0 z-20" id="top-nav">
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

 
            <div class="text-left hidden md:block">
              <h1 class="text-[28px] font-bold mb-4 leading-[32px]">
                Top 10 Best Mattresses In UK: Ratings, Reviews and Sales of Top Mattresses!
              </h1>
              <p class="text-[16px] mb-4">
                You will spend a third of your life on a mattress. MattressVerdict is here to help you make a better choice when buying an online mattress. We provide detailed reviews of the best mattresses in 2024.
              </p>
              <p class="text-sm text-gray-300">
                Disclosure: We receive referral fees from the brands listed below. <a href="#" class=" underline"  id="openDiscosure">More</a>
              </p>
            </div>
            <div class="md:hidden bg-[#1D1C1C] bg-opacity-60 items-center justify-center h-[50px] w-full flex text-white">Top 10 Best Mattresses UK 2024</div>
          </div>
                 <div class="bg-white py-2 px-4 md:hidden text-black uppercase">
              Top 10 Best Mattresses In UK: Ratings, Reviews and Sales of Top Mattresses! Updated to November 15, 2024
                <div class="text-color-grey normal-case text-[12px]">
                    <span>Disclosure: We receive referral fees from the brands listed below.</span>
                    <button class="link disclosure-link underline" type="button">More</button>
                </div>
              </div>
        </div>
      </header>
    `;
  }
  