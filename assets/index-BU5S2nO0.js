(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();function y(){return`
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
    `}const w=[{question:"How do I choose the best mattress for back pain?",answer:'Look for mattresses that provide ample support and keep your spine aligned, especially if you suffer from back pain. Mattresses with medium to firm support are often recommended. Our "Back Pain" category compares mattresses specifically designed to relieve back pain and enhance support and comfort'},{question:"What is the benefit of a memory foam mattress?",answer:'Memory foam mattresses conform to your body, providing pressure relief and reducing motion transfer, making them a popular choice for those who share a bed. They’re ideal for people who want extra comfort and support without compromising on a soft feel. Check out our "Memory Foam" category for the top options.'},{question:"Are there affordable options for high-quality mattresses?",answer:'Yes, you can find high-quality mattresses across a wide range of prices. Our comparison includes a variety of mattresses that balance comfort, durability, and budget. Browse the "Top Picks" section for budget-friendly options that don’t compromise on quality'}];function _(){return`
      <aside class="bg-[#545B63] text-[#D7D7D6] p-6 space-y-8 h-full">
        <!-- Common Questions -->
        <div>
          <h2 class="text-xl font-semibold text-center mb-4 border-b border-[#D7D7D6] pb-2">Common Questions</h2>

          <div class="flex flex-col gap-[10px]">
            ${w.map(({question:i,answer:a})=>`
      <div class="faq-item">
        <!-- Question -->
        <button class="faq-toggle">
          <span class="arrow-faq relative hover:underline flex text-start pl-5">${i}</span>
        </button>

        <!-- Answer -->
        <p class="faq-answer hidden mt-2 text-[#D7D7D6] pl-5">
          ${a}
        </p>
      </div>
    `).join("")}
          </div>

        </div>
  
        <!-- Most Popular Articles -->
        <div>
          <h2 class="text-xl font-semibold text-center mb-4 border-b border-[#D7D7D6] pb-2">Most Popular Articles</h2>
          <div class="space-y-6">
            <!-- Article 1 -->
            <div>
              <h3 class="text-color-blue font-bold">
                <a href="https://mattressverdict.com/comparison/best-mattress" class="hover:underline">
                  Top Mattresses Compared: Find the Best Mattress for Your Sleep Needs
                </a>
              </h3>
              <p class="mt-2">
                Discover the best mattresses on the market with our in-depth comparison. Whether you need extra support, prefer memory foam, or are looking for luxury options, we've evaluated the top picks to suit every sleep style and budget. From durability to comfort and value, make an informed choice for a better night's rest.
              </p>
              <a href="https://mattressverdict.com/comparison/best-mattress" class="text-[#FEFEFE] text-sm hover:underline arrow arrow-gray font-bold">Read More</a>
            </div>
  
            <!-- Article 2 -->
            <div>
              <h3 class="text-color-blue font-bold">
                <a href="https://mattressverdict.com/comparison/best-mattress-for-back-pain" class="hover:underline">
                  Top Mattresses for Back Pain Relief: Our Best Picks for Supportive Sleep
                </a>
              </h3>
              <p class="mt-2">
                Find relief from back pain with our top mattress choices. We've compared the best options to provide comfort, support, and alignment for a restful night.
              </p>
              <a href="https://mattressverdict.com/comparison/best-mattress-for-back-pain" class="text-[#FEFEFE] text-sm hover:underline font-bold arrow arrow-gray">Read More</a>
            </div>
  
            <!-- Article 3 -->
            <div>
              <h3 class="text-color-blue font-bold">
                <a href="https://mattressverdict.com/comparison/best-memory-foam-mattress" class="hover:underline">
                  Best Memory Foam Mattresses: Ultimate Comfort and Support
                </a>
              </h3>
              <p class="mt-2">
                Back pain can interfere with your sleep, making you feel tired and achy all day. The right mattress can help UK back pain sufferers sleep comfortably through the night and wake up refreshed.
              </p>
              <a href="https://mattressverdict.com/comparison/best-memory-foam-mattress" class="text-[#FEFEFE] text-sm hover:underline font-bold arrow arrow-gray">Read More</a>
            </div>
          </div>
        </div>
      </aside>
    `}function k({ribbon:e,logo:i,title:a,scoreValue:r,scoreText:s,list:t,special:l}){return`
      <div class="border-b border-gray-300 bg-white relative hover:bg-[#EAEEFB] hover:cursor-pointer">
        <div class="ribbon">${e}</div>
  
        <!-- Content -->
        <div class="flex  md:pt-3">
          <!-- Logo -->
          <div class="  pt-10 md:pt-8 pb-3  px-5 md:max-w-[24%] w-[40%] h-auto md:justify-center flex flex-col">
          <img src="./assets/images/${i}" alt="Logo" class="w-full">
          <!-- Score -->
          <div class="text-center relative w-full md:hidden">
            <div class=" text-[46px] font-rock text-color-base">${r}</div>
            <div class="flex justify-center items-center text-yellow-500 mb-2">
            ${Array.from({length:5}).map(()=>'<span class="star star-full"></span>').join("")}  
            </div>

          </div>
        </div>
  
          <!-- List -->
          <div class="pt-8 pb-20 md:pb-3 md:max-w-[48%] flex-1 px-2 md-px-0">
            <h3 class="text-lg font-bold mb-2 font-rock">${a}</h3>
            <hr class="md-hidden border-black mb-3 mt-5">
            <div class="items-center text-yellow-500 mb-2 hidden md:flex">
            ${Array.from({length:5}).map(()=>'<span class="star star-full"></span>').join("")}  
            </div>
            <a href="#" class="text-color-linkReview text-small font-bold underline ml-5 md:hidden">Full Review</a>
            <ul class="text-sm text-gray-600 space-y-1 mb-2">
               ${t.map(c=>`<li class="list-item font-bold text-color-grey">${c}</li>`).join("")}
              <li class="list-item  text-color-red font-bold">${l}</li>
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
          <div class="text-center relative w-full">
            <div class=" text-[46px] font-rock text-color-base">${r}</div>
            <div class="text-base bg-background-grey text-color-base py-1 px-2 mx-auto w-fit font-bold">${s}</div>

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
    `}function o({logo:e,title:i,scoreValue:a,scoreText:r,list:s,special:t}){a=parseFloat(a);let l=`<div class="flex items-center text-yellow-500 mb-2 justify-center md:justify-start">
              ${Array.from({length:3}).map(()=>'<span class="star star-full"></span>').join("")} 
              <span class="star star-half"></span> 
              <span class="star star-empty"></span> 
              </div>`;return a>9.5?l=`<div class="flex items-center text-yellow-500 mb-2 justify-center md:justify-start">
          ${Array.from({length:5}).map(()=>'<span class="star star-full"></span>').join("")}  
          </div>`:a>9?l=`<div class="flex items-center text-yellow-500 mb-2 justify-center md:justify-start">
          ${Array.from({length:4}).map(()=>'<span class="star star-full"></span>').join("")} 
          <span class="star star-half"></span> 
          </div>`:a>8.5&&(l=`<div class="flex items-center text-yellow-500 mb-2 justify-center md:justify-start">
          ${Array.from({length:4}).map(()=>'<span class="star star-full"></span>').join("")} 
          <span class="star star-empty"></span> 
          </div>`),`
    <div class="border-b border-gray-300 bg-white relative hover:bg-[#EAEEFB] hover:cursor-pointer">

      <!-- Content -->
      <div class="flex  md:pt-3">
        <!-- Logo -->
        <div class="  pt-8 pb-3  px-5 md:max-w-[24%] w-[40%] h-auto md:justify-center flex flex-col">
          <img src="./assets/images/${e}" alt="Logo" class="w-full">
          <!-- Score -->
          <div class="text-center relative w-full md:hidden">
            <div class=" text-[46px] font-rock text-color-base">${a}</div>
            ${l}

          </div>
        </div>

        <!-- List -->
        <div class="  pt-8 pb-3 md:max-w-[48%] flex-1 px-2 md-px-0">
          <h3 class="text-[18px] md:text-lg md:font-bold mb-2 font-rock">${i}</h3>
          <div class="hidden md:block">${l}</div>
          <hr class="md-hidden border-black mb-3 mt-5">
          <a href="#" class="text-color-linkReview text-small font-bold underline ml-5 md:hidden">Full Review</a>
          <ul class="text-sm text-gray-600 space-y-1 mb-2">
             ${s.map(c=>`<li class="text-small md:text-base list-item  text-color-grey">${c}</li>`).join("")}
            ${t.underline?`<li class="text-small md:text-base list-item  underline">${t.underline}</li>`:""}
            ${t.red?`<li class="text-small md:text-base list-item  text-color-red font-bold">${t.red}</li>`:""}
            
             
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
          <div class=" text-[46px] font-rock text-color-base">${a}</div>
          <div class="text-base bg-background-grey text-color-base py-1 px-2 mx-auto w-fit font-bold">${r}</div>

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
  `}function M(){return`
    <div class="flex">

        <div class="w-full md:w-[70%] bg-background-primary text-text-primary ">

            ${k({ribbon:"Best Mattress Overall- UK 2024",logo:"dreamcloud_logo.webp",title:"DreamCloud UK - Luxurious Hybrid Mattress",scoreValue:"9.8",scoreText:"Outstanding",list:["Superior 365-night sleep trial","Forever Warranty™ protection","Combines comfort & support","Luxurious and cooling","Buy Now, Pay Later","Free returns and shipping","Lifetime warranty"],special:"*** Get up to 50% OFF any mattress! ***"})}

            ${o({logo:"simba_logo.png",title:"Simba Hybrid Luxe Mattress Review",scoreValue:"9.5",scoreText:"Excellent",list:["Provides contouring and support","Targets support where you need it most","Keeps the mattress temperature just right","Conveniently delivered in a box to your door","Free delivery to most UK addresses","200-night risk-free trial","Lifetime warranty"],special:{underline:"Made in the UK!",red:"Get free accessories"}})}

            ${o({logo:"simba_logo.png",title:"Simba Award Winning Hybrid Mattress Original",scoreValue:"9.4",scoreText:"Excellent",list:["325,000+ five star reviews","Aerocoil® spring layers for comfort and airflow","Natural wool top layer for a cool sleep ","Unique Simba-Pure comfort layers","Long 200 nights sleep trial","Free delivery to most UK addresses","Lifetime warranty"],special:{underline:"Made in the UK!",red:null}})}

            ${o({logo:"nectar_logo.webp",title:"Nectar Premier Hybrid Mattress Review",scoreValue:"9.3",scoreText:"Great",list:["Breathable materials keep you cool","7-zone pressure relief","Motion isolation lets you sleep undisturbed","Free of harmful chemicals","365 night home trial","Forever warranty protection","Up to 45% off mattresses + free delivery"],special:{underline:null,red:null}})}

            ${o({logo:"hypnia-logo.png",title:"Hypnia Supreme Hybrid Mattress Reviewl",scoreValue:"9.2",scoreText:"Very Good",list:["Balances comfort and support","Keeps you cool and comfortable","7 support zones","30cm thickness","200-night sleep trial"],special:{underline:null,red:"Up to 60% off"}})}

            ${o({logo:"LOLA-logo.png",title:"Lola Mattress UK Review",scoreValue:"9.1",scoreText:"Very Good",list:["Construction that provides support and coolness","100-night trial","Removable, machine-washable mattress cover","8-year manufacturer’s guarantee"],special:{underline:null,red:null}})}
            
            ${o({logo:"ergoflex-logo.png",title:"Ergoflex 5G Mattress UK Review",scoreValue:"8.6",scoreText:"Our Score",list:["Orthopaedic pressure relief ","Unique Cool-Sleep™ airflow system","OKEO-TEX® 100 Certified ","Fifth-generation design"],special:{underline:null,red:null}})}

            ${o({logo:"mattressman-logo.png",title:"Mattressman UK Review",scoreValue:"8.5",scoreText:"Our Score",list:["+8,000 mattresses and more","Price Promise policy","Next business day delivery (UK mainland)","Top brands (hybrid, memory foam, etc.)"],special:{underline:null,red:null}})}


        </div>


        <div class="hidden md:block w-[30%] bg-background-secondary text-text-secondary">
            ${_()}
        </div>
    </div>

    `}const E=[{brand_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1",brand_logo:"https://mattressverdict.com/images/c3f86d2e30a15e29f0e20a11f0bad16c.webp",model:"Dreamcloud Mattress",material:"Hybrid",cooling:"9.5/10",firmness:"Medium",motion_isolation:"7/10",trial_period:"365-Night Trial",shipping_returns:!0,warranty:"Lifetime",price_level:3,special_sales:"Black Friday Deals | Up To 50% OFF!",cta_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1"},{brand_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1",brand_logo:"https://mattressverdict.com/images/c3f86d2e30a15e29f0e20a11f0bad16c.webp",model:"Dreamcloud Mattress",material:"Hybrid",cooling:"9.5/10",firmness:"Medium",motion_isolation:"7/10",trial_period:"365-Night Trial",shipping_returns:!0,warranty:"Lifetime",price_level:3,special_sales:"Black Friday Deals | Up To 50% OFF!",cta_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1"},{brand_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1",brand_logo:"https://mattressverdict.com/images/c3f86d2e30a15e29f0e20a11f0bad16c.webp",model:"Dreamcloud Mattress",material:"Hybrid",cooling:"9.5/10",firmness:"Medium",motion_isolation:"7/10",trial_period:"365-Night Trial",shipping_returns:!0,warranty:"Lifetime",price_level:3,special_sales:"Black Friday Deals | Up To 50% OFF!",cta_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1"},{brand_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1",brand_logo:"https://mattressverdict.com/images/c3f86d2e30a15e29f0e20a11f0bad16c.webp",model:"Dreamcloud Mattress",material:"Hybrid",cooling:"9.5/10",firmness:"Medium",motion_isolation:"7/10",trial_period:"365-Night Trial",shipping_returns:!0,warranty:"Lifetime",price_level:3,special_sales:"Black Friday Deals | Up To 50% OFF!",cta_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1"},{brand_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1",brand_logo:"https://mattressverdict.com/images/c3f86d2e30a15e29f0e20a11f0bad16c.webp",model:"Dreamcloud Mattress",material:"Hybrid",cooling:"9.5/10",firmness:"Medium",motion_isolation:"7/10",trial_period:"365-Night Trial",shipping_returns:!0,warranty:"Lifetime",price_level:3,special_sales:"Black Friday Deals | Up To 50% OFF!",cta_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1"},{brand_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1",brand_logo:"https://mattressverdict.com/images/c3f86d2e30a15e29f0e20a11f0bad16c.webp",model:"Dreamcloud Mattress",material:"Hybrid",cooling:"9.5/10",firmness:"Medium",motion_isolation:"7/10",trial_period:"365-Night Trial",shipping_returns:!0,warranty:"Lifetime",price_level:3,special_sales:"Black Friday Deals | Up To 50% OFF!",cta_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1"},{brand_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1",brand_logo:"https://mattressverdict.com/images/c3f86d2e30a15e29f0e20a11f0bad16c.webp",model:"Dreamcloud Mattress",material:"Hybrid",cooling:"9.5/10",firmness:"Medium",motion_isolation:"7/10",trial_period:"365-Night Trial",shipping_returns:!0,warranty:"Lifetime",price_level:3,special_sales:"Black Friday Deals | Up To 50% OFF!",cta_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1"},{brand_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1",brand_logo:"https://mattressverdict.com/images/c3f86d2e30a15e29f0e20a11f0bad16c.webp",model:"Dreamcloud Mattress",material:"Hybrid",cooling:"9.5/10",firmness:"Medium",motion_isolation:"7/10",trial_period:"365-Night Trial",shipping_returns:!0,warranty:"Lifetime",price_level:3,special_sales:"Black Friday Deals | Up To 50% OFF!",cta_link:"https://mattressverdict.com/track?site=2&image_id=2&position=1"}];function B(){return`
    <div class="mt-10 ">
      <h2 class="ml-2 my-6 xl:ml-0 md:my-2 uppercase font-bold text-[#237999] text-[25px] leading-[28px] md:leading-normal">COMPARING OUR TOP 5 BEST MATTRESSES ONLINE</h2>
      <div class="flex border-x">
        <!-- Headers -->
        <div class="grid grid-rows-13 w-[145px] md:w-[178px] bg-white  pb-[6px]">
          <div class="cell-style font-bold text-[#4f4f4f]"></div>
          <div class="cell-style font-bold text-[#4f4f4f]">Review</div>
          <div class="cell-style font-bold text-[#4f4f4f]">Model</div>
          <div class="cell-style font-bold text-[#4f4f4f]">Material</div>
          <div class="cell-style font-bold text-[#4f4f4f]">Cooling</div>
          <div class="cell-style font-bold text-[#4f4f4f]">Firmness</div>
          <div class="cell-style font-bold text-[#4f4f4f]">Motion Isolation</div>
          <div class="cell-style font-bold text-[#4f4f4f]">Trial Period</div>
          <div class="cell-style font-bold text-[#4f4f4f]">Free Shipping and Returns</div>
          <div class="cell-style font-bold text-[#4f4f4f]">Warranty</div>
          <div class="cell-style font-bold text-[#4f4f4f]">Price Level</div>
          <div class="cell-style font-bold text-[#4f4f4f]">Special Sales</div>
          <div class="cell-style font-bold text-[#4f4f4f] !border-b-0"></div>
        </div>

        <!-- Data -->
        
        <div class="overflow-x-auto flex brands-table flex-1 ">
          ${E.map(({brand_link:i,brand_logo:a,model:r,material:s,cooling:t,firmness:l,motion_isolation:c,trial_period:f,shipping_returns:S,warranty:u,price_level:h,special_sales:v,cta_link:b})=>{let g=Array(4).fill("./assets/images/icon-dollar_gray.svg").fill("./assets/images/icon-dollar.svg",0,h).map(x=>`<img width="21px" height="21px" src="${x}" alt="Dollar">`).join("");return`
          <div class="flex">
            <div class="grid grid-rows-13 w-[145px] md:w-[170px]">
              <a class="cell-style text-color-blue font-bold" href="${i}">
                <img src="${a}" class="max-w-[75%] py-2">
              </a>
              <div class="cell-style text-[#727271]">
                <a href="${i}" class="text-color-blue underline">Read Review</a>
              </div>
              <div class="cell-style text-[#727271]">${r}</div>
              <div class="cell-style text-[#727271]">${s}</div>
              <div class="cell-style text-[#727271]">${t}</div>
              <div class="cell-style text-[#727271]">${l}</div>
              <div class="cell-style text-[#727271]">${c}</div>
              <div class="cell-style text-[#727271]">${f}</div>
              <div class="cell-style text-[#727271]"><img src="https://mattressverdict.com/img/check-yes.svg"></div>
              <div class="cell-style text-[#727271]">${u}</div>
              <div class="cell-style text-[#727271]">${g}</div>
              <div class="cell-style text-color-red font-bold">${v}</div>
              <div class="cell-style">
                <a class="w-[130px] h-[50px] flex items-center justify-center bg-[#1FC0C8] border-b-[5px] border-b-[#238E9B] text-white px-4 py-1 rounded-[10px] hover:bg-[#238E9B] arrow arrow-white" href=${b}>Visit site</a>
              </div>
            </div>
          </div>
        `}).join("")}
        </div>

      </div>
    </div>
  `}function F(){return`
      <div class="bg-[#EDEDED] text-[#6C6B6E] py-10 px-6">
  <!-- How to Choose Section -->
  <section>
    <h2 class="text-[#0749A6] text-2xl font-bold mb-4">How to Choose the Best Mattress 2024?</h2>
    <p class="mb-4">
      Buying a mattress is not something that we do regularly. Since you’re here, the chances are you’re either replacing an old and worn-out mattress or buying your first. Either way, you’re likely overwhelmed by the various brands available today. But what you’ll find even more confusing are the different mattress technologies and the jargon used in the market. In this ultimate mattress buying guide, we’ve highlighted some critical tips to guide you when choosing the best mattress to buy today.
We understand that narrowing down to just one bed from the sea of options in the market isn’t easy. For that reason, we’ve also included links to some of the top rated mattresses that may perfectly match your sleeping needs. This list can be found on this page. In case of specific needs we suggest checking the categories at the top of the page.
    </p>
  </section>

  <!-- 5 Major Types Section -->
  <section class="mt-10">
    <h3 class="text-[#0749A6] text-xl font-bold mb-4">5 Major Types of Mattresses</h3>
    <ul class="list-none  space-y-4">
      <li>
        <h4 class="text-[#0749A6] font-semibold">#1: Latex Mattresses</h4>
        <p>Latex is a natural material derived from the sap of rubber trees. This material offers most of the benefits of memory foam, including pressure relief and motion isolation.</p>
        <a href="" class="text-color-linkReview">Best Foam Mattress &rarr;</a>
      </li>
      <li>
        <h4 class="text-[#0749A6] font-semibold">#2: Memory Foam</h4>
        <p>In the trade, memory foam mattress is known as visco-elastic foam owing to its viscous and elastic properties. Memory foam responds to your body temperature and weight (pressure) to contour to your body shape and curves. When you get off the bed, the mattress recovers slowly to regain its original condition.</p>
        <a href="" class="text-color-linkReview">Best Foam Mattress &rarr;</a>
      </li>
  <li>
        <h4 class="text-[#0749A6] font-semibold">#3: Innerspring Mattress</h4>
        <p>These beds are commonly known as coil mattresses and date way back to 1865. Although they have gradually lost their luster over the years, innerspring mattresses are still a popular pick today due in part to their affordability and new technologies used.</p>
        <a href="" class="text-color-linkReview">Best Innerspring mattress &rarr;</a>
      </li>
        <li>
        <h4 class="text-[#0749A6] font-semibold">#4: Hybrid Mattress</h4>
        <p>Hybrid mattresses are a new style of beds that combine 2 or more mattress technologies. A typical hybrid mattress has an all-foam comfort section and a coil-based core. Most of these mattresses employ memory foam for the comfort layer, although latex is common too. For the support system, most of the cheap models have traditional Bonnell springs. However, the best hybrid mattresses for the money have individually encased springs that move independently to lower motion isolation and offer localized support just where you need it.</p>
        <a href="" class="text-color-linkReview">Best Hybrid mattress &rarr;</a>
      </li>
        <li>
        <h4 class="text-[#0749A6] font-semibold">#5: Pillow Top Mattress</h4>
        <p>Pillow top mattresses are a relatively new craze, too. These models are popular with individuals who want a mattress with a plush sleeping surface and a good balance of support and cushioning. A pillow-top mattress is a 2-tier bed with a support section that can be anything from coil to foam or latex. The pillow-top section is sewn or glued onto the main mattress and may comprise wool, latex, or memory foam, among other materials.</p>
        <a href="" class="text-color-linkReview">Best Pillow Top Mattresses &rarr;</a>
      </li>
    </ul>
  </section>

  <!-- Other Elements Section -->
  <section class="mt-10">
    <h3 class="text-[#0749A6] text-xl font-bold mb-4">Other elements you may want to consider</h3>
     <h4 class="text-[#0749A6] font-semibold">Firmness & Support</h4>
    <p class="mb-4 ">
      The firmness profile refers to how the mattress feels when you first lie on the bed- is it soft or firm? The mattress firmness level is a very tricky discussion because your perception is mainly influenced by your body shape, weight, and sleeping position. That said, what feels like a firm mattress to you may be perceived as plush by another person.
    </p>

        <h4 class="text-[#0749A6] font-semibold">Firmness Scale</h4>
    <p class="mb-4 ">
      To make it easy for you to compare different mattress firmness levels online, manufacturers use a 1-10 firmness scale where 1 is feather-light, and 10 is rock-solid.
    </p>
  </section>

    <h4 class="text-[#0749A6] font-semibold">Budget- how much should you spend on a mattress?</h4>
    <p class="mb-4 ">
      There are lots of factors that impact the price of a mattress: construction material, technologies used in it, size of the bed, and the popularity of the brand. In general, the prices of the best mattresses 2024 range from $500 to $2500. But we’ve also seen mattresses that cost below $100 and others that cost well over $5,000. A lower price tag does not necessarily mean poor construction. Neither is the most expensive mattress, always the best. However, it’s essential to view this as an investment in quality sleep. Remember that the bed that you choose now will dictate the quality of your sleep for 5-7 years or even more. So, whatever your budget, make the right choice: pick quality over a lower price tag. You’ll be glad you did.
    </p>


        <h4 class="text-[#0749A6] font-semibold">Top Rated Mattresses 2024</h4>
    <p class="mb-4 ">
      The table above combines a selection of the best mattress out there today. Ranked from the best mattress in class at the top. We always suggest reading our full reviews of each mattress to understand what's the best mattress for you. You can find a link for the full review for each of the mattress brands listed using the above table.
    </p>


  <!-- Final Words Section -->
  <section class="mt-10">
    <h3 class="text-[#0749A6] text-xl font-bold mb-4">Final Words</h3>
    <p class="mb-4">
      A mattress is a necessary purchase that affects not only your sleep but the quality of your life. There is nothing like a one-size-fits-all mattress. So, it all comes down to your preferences, body shape, weight, and sleeping position. Of course, your budget will also inform your decision a big deal. Don’t let a low budget compromise the quality of your sleep, though. If possible, save a little more for a higher quality bed. Also, check out the exclusive coupons using our links and stay alert for any discounted deals from mattress brands. Happy Mattress Shopping!
    </p>
  </section>

  <!-- Top Picks Section -->
  <section class="mt-10">
   <div class="top-picks">
      <div class="top-picks__badge-box">
        <div class="top-picks__badge-text">Our Top Picks</div>
      </div>
      <span class="top-picks__title">for November 2024</span>

      <div class="top-picks__item">
        <div class="top-picks__img">
          <div class="image">
            <a href="" rel="nofollow" target="_blank">
              <picture id="">
                <source srcset="https://mattressverdict.com/images/57ff6f463bf1e93c3530f7205175ec97.webp" type="image/webp">
                <img src="https://mattressverdict.com/images/57ff6f463bf1e93c3530f7205175ec97.jpg" alt="dreamcloud mattress on bed">
              </picture>
            </a>
          </div>
        </div>
        <div class="top-picks__content">
          <div class="logo">
            <a href="" rel="nofollow" target="_blank">
              <picture id="">
                <source srcset="https://mattressverdict.com/images/57ff6f463bf1e93c3530f7205175ec97.webp" type="image/webp">
                <img src="https://mattressverdict.com/images/57ff6f463bf1e93c3530f7205175ec97.jpg" alt="dreamcloud logo" loading="lazy"
                  id="dreamcloud_mattress_mattress_CO_bottom1">
              </picture>
            </a>
          </div>
          <div class="tag">Best Overall</div>
          <div class="title">Dreamcloud Mattress</div>
          <div class="score">
            <div class="flex">
            <span class="star star-full"></span>
            <span class="star star-full"></span>
                <span class="star star-full"></span>
                <span class="star star-full"></span>
                <span class="star star-full"></span></div>
          </div>
          <div class="feature">
            Hybrid | 6.5/10</div>
        </div>
        <div class="top-picks__cta">
          <div class="top-picks__cta-mob">
            <div class="brand">Dreamcloud Mattress</div>
            <div class="score">
              <div class="flex"><span class="star star-full"></span><span
                  class="star star-full"></span><span class="star star-full"></span><span class="star star-full"></span><span
                  class="star star-full"></span></div>
            </div>
          </div>
          <a id="dreamcloud_mattress_mattress_CO_bottom1" class="btn arrow arrow-white arrow-btn" href="" rel="nofollow" target="_blank">CHECK
            PRICE</a>

          <div class="offer">Black Friday Deals | Up To 50% OFF!</div>
        </div>
      </div>

      <div class="top-picks__item">
        <div class="top-picks__img">
          <div class="image">
            <a href="" rel="nofollow" target="_blank">
              <picture id="">
                <source srcset="https://mattressverdict.com/images/2afb9c9b976b916d8a4e8e509fabe0e5.webp" type="image/webp">
                <img src="https://mattressverdict.com/images/2afb9c9b976b916d8a4e8e509fabe0e5.jpg" alt="nectar mattress on bed">
              </picture>
            </a>
          </div>
        </div>
        <div class="top-picks__content">
          <div class="logo">
            <a href="" rel="nofollow" target="_blank">
              <picture id="">
                <source srcset="https://mattressverdict.com/images/2afb9c9b976b916d8a4e8e509fabe0e5.webp" type="image/webp">
                <img src="https://mattressverdict.com/images/2afb9c9b976b916d8a4e8e509fabe0e5.jpg" alt="nectar logo">
              </picture>
            </a>
          </div>
          <div class="tag">Best Value</div>
          <div class="title">Nectar Mattress</div>
          <div class="score">
            <div class="flex"><span class="star star-full"></span><span
                class="star star-full"></span><span class="star star-full"></span><span class="star star-full"></span><span
                class="star star-full"></span></div>
          </div>
          <div class="feature">
            Memory Foam | 6.5/10</div>
        </div>
        <div class="top-picks__cta">
          <div class="top-picks__cta-mob">
            <div class="brand">Nectar Mattress</div>
            <div class="score">
              <div class="flex"><span class="star star-full"></span><span
                  class="star star-full"></span><span class="star star-full"></span><span class="star star-full"></span><span
                  class="star star-full"></span></div>
            </div>
          </div>
          <a id="nectar_mattress_mattress_CO_bottom1" class="btn arrow arrow-white arrow-btn" href="" rel="nofollow" target="_blank">CHECK PRICE</a>

          <div class="offer">Black Friday | Up To 50% OFF + $100 OFF!</div>
        </div>
      </div>

      <div class="top-picks__item">
        <div class="top-picks__img">
          <div class="image">
            <a id="saatva_mattress_mattress_CO_bottom1" class="trackOut" href="" rel="nofollow" target="_blank">
              <picture id="">
                <source srcset="https://mattressverdict.com/images/959e32770ea8c416afd6c6cc23c15e74.png" type="image/webp">
                <img src="https://mattressverdict.com/images/959e32770ea8c416afd6c6cc23c15e74.png" alt="saatva mattress on bed">
              </picture>
            </a>
          </div>
        </div>
        <div class="top-picks__content">
          <div class="logo">
            <a href="" target="_blank">
              <picture id="">
                <source srcset="https://mattressverdict.com/images/959e32770ea8c416afd6c6cc23c15e74.png" type="image/webp">
                <img src="https://mattressverdict.com/images/959e32770ea8c416afd6c6cc23c15e74.png" alt="saatva logo" loading="lazy">
              </picture>
            </a>
          </div>
          <div class="tag">Best Luxury</div>
          <div class="title">Saatva Mattress</div>
          <div class="score">
            <div class="flex"><span class="star star-full"></span><span
                class="star star-full"></span><span class="star star-full"></span><span class="star star-full"></span><span
                class="star star-full"></span></div>
          </div>
          <div class="feature">
            Innerspring | 3 Firmness Options</div>
        </div>
        <div class="top-picks__cta">
          <div class="top-picks__cta-mob">
            <div class="brand">Saatva Mattress</div>
            <div class="score">
              <div class="flex"><span class="star star-full"></span><span
                  class="star star-full"></span><span class="star star-full"></span><span class="star star-full"></span><span
                  class="star star-full"></span></div>
            </div>
          </div>
          <a id="saatva_mattress_mattress_CO_bottom1" class="btn arrow arrow-white arrow-btn" href="" rel="nofollow" target="_blank">CHECK
            PRICE</a>

          <div class="offer">Black Friday | Up to $600 OFF</div>
        </div>
      </div>
    </div>
  </section>

 <!-- Recommended Section -->
    <section class="mt-10">
    <h3 class="text-[#0749A6] text-xl font-bold ">Recommended Mattress</h3>
     <h4 class="text-[#0749A6] font-bold mt-4">Best Overall: Dreamcloud Mattress </h4>
     <p>
     If you’re looking for a budget-friendly mattress that exceeds your expectations, the DreamCloud line is a great place to start. Should you choose to get a DreamCloud mattress, you’ll enjoy the convenience of box delivery at your doorstep and the guarantee of a 365-night home trial offer and lifetime warranty. There are also freebies and other incentives that come with a DreamCloud mattress purchase. In our opinion, the DreamCloud mattress is an excellent option for both back and side sleepers. Its pressure-relieving technology will help ease stress and tension on joints and bones. And if you suffer from night sweats or get hot in your sleep, the cooling technology will keep you much cooler. The DreamCloud mattress is a great option for both back and side sleepers. The pressure-relieving technology will help ease stress and tension on joints and bones. If you suffer from night sweats or getting hot in your sleep, the cooling technology is a bonus that will keep you comfortable.
     </p>
    
     <section class="spcls bg-white w-fit p-2 rounded-[5px] mt-2">

      <div class="spcls__line">
        <div class="spcls__image">
          <picture id="">
            <source srcset="https://mattressverdict.com/images/57ff6f463bf1e93c3530f7205175ec97.webp" type="image/webp">
            <img src="https://mattressverdict.com/images/57ff6f463bf1e93c3530f7205175ec97.jpg"
              alt="dreamcloud mattress on bed" loading="lazy" width="225" height="165">
          </picture>
        </div>
        <div class="spcls__summary">
          <div class="spcls__summary-item"> <img src="https://mattressverdict.com/img/spcls__icon1.svg" alt="icon"
              width="26" height="13">
            <div class="spcls__summary-item__text"><span class="title">Trial</span><span class="value">365-Night
                Trial</span></div>
          </div>
          <div class="spcls__summary-item"> <img src="https://mattressverdict.com/img/spcls__icon2.svg" alt="icon"
              width="24" height="20">
            <div class="spcls__summary-item__text"><span class="title">Warranty</span><span class="value">Lifetime</span>
            </div>
          </div>
          <div class="spcls__summary-item"> <img src="https://mattressverdict.com/img/spcls__icon3.svg" alt="icon"
              width="21" height="24">
            <div class="spcls__summary-item__text"><span class="title">Shipping/Returns</span><span class="value">&amp;
                Returns</span></div>
          </div>
          <div class="spcls__summary-item"> <img src="https://mattressverdict.com/img/spcls__icon2.svg" alt="icon"
              width="24" height="20">
            <div class="spcls__summary-item__text"><span class="title">Mattress Type</span><span class="value">Hybrid</span>
            </div>
          </div>
          <div class="spcls__summary-item"> <img src="https://mattressverdict.com/img/spcls__icon1.svg" alt="icon"
              width="26" height="13">
            <div class="spcls__summary-item__text"><span class="title">Firmness</span><span class="value">6.5/10</span>
            </div>
          </div>
        </div>
      </div>
      <div class="spcls__line">
        <div class="spcls__offer">Black Friday Deals | Up To 50% OFF!</div>
        <div class="spcls__btn">
          <a class="btn  arrow arrow-white arrow-middle" href="" rel="nofollow" target="_blank">Check Price</a>
        </div>
      </div>
      <div class="spcls__line">
        <div class="spcls-tabs w-full" id="tabs-1">

          <div class="spcls-tabs__btns flex ">
            <button
              class="spcls-tabs__btn active px-4 py-2 bg-[#1FC0C8] text-white rounded focus:outline-none hover:bg-[#238E9B]"
              type="button" data-target="#tabs-1  .tab1">
              Benefits
            </button>
            <button class="spcls-tabs__btn px-4 py-2 bg-gray-300 text-gray-700 rounded focus:outline-none hover:bg-gray-400"
              type="button" data-target="#tabs-1  .tab2">
              More Details
            </button>
          </div>

          <div class="spcls-tabs__panels">
            <div class="spcls-tabs__panel tab1 active">
              <ul class="bnfs-list list-disc pl-5  text-[#6C6B6E]">
                <li>Back sleepers</li>
                <li>Side Sleepers</li>
                <li>Hot Sleepers</li>
                <li>Couples</li>
                <li>365-night home trial</li>
                <li>Lifetime warranty</li>
              </ul>
            </div>

            <div class="spcls-tabs__panel tab2 hidden">
              <div class="text-[#6C6B6E]">
                <b class="block mb-2 text-[#EDEDED]">Overview</b>
                <p class="mb-4">
                  Dreamcloud is an excellent value-for-money mattress in the luxury mattress market. With a 14" 5-layer
                  hybrid
                  construction and a bed-in-box that ships directly to your doorstep, it offers luxurious comfort at a
                  fraction
                  of the price.
                </p>

                <b class="block mb-2 text-[#EDEDED]">Pros &amp; Cons</b>
                <div class="prcadcns flex gap-4">
                  <!-- Pros -->
                  <ul class="prcadcns__pros list-disc pl-5 space-y-2 text-[#6C6B6E]">
                    <li>Accommodates all sleeping positions</li>
                    <li>It conveniently ships in a box and allows for easy setup</li>
                    <li>Pillow, mattress protector, and sheet set provided with purchase</li>
                    <li>Get a lifetime warranty to ensure you made the right choice</li>
                    <li>Cost-effective with free shipping and returns</li>
                  </ul>

                  <!-- Cons -->
                  <ul class="prcadcns__cons list-disc pl-5 space-y-2 text-[#6C6B6E]">
                    <li>Does include springs and coils for those who are sensitive to them</li>
                    <li>Includes memory foam, which provides a firmer feeling for restless sleepers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


      <h4 class="text-[#0749A6] font-bold mt-4">Best Value: Nectar Mattress </h4>
     <p>
If you're looking to purchase a bed-in-a-box that offers comfort and affordability, then this Nectar original mattress is a solid choice. It stands out for its pressure-relieving comfort, classic memory foam feel, and minimal motion transfer. Nectar Sleep provides a lifetime warranty and a 365-night trial period, making it an excellent investment for anyone looking for a reliable, long-lasting mattress. With many positive reviews from happy customers, the Nectar mattress is a popular choice backed by an impressive track record that proves its value over time.     </p>


<section class="spcls bg-white w-fit p-2 rounded-[5px] mt-2">
  <div class="spcls__line">
    <div class="spcls__image">
      <picture id="">
        <source srcset="https://mattressverdict.com/images/2afb9c9b976b916d8a4e8e509fabe0e5.webp" type="image/webp">
        <img src="https://mattressverdict.com/images/2afb9c9b976b916d8a4e8e509fabe0e5.jpg" alt="nectar mattress on bed" loading="lazy" width="225"
          height="165">
      </picture>
    </div>
    <div class="spcls__summary">
      <div class="spcls__summary-item"> <img src="https://mattressverdict.com/img/spcls__icon1.svg" alt="icon" width="26" height="13">
        <div class="spcls__summary-item__text"><span class="title">Trial</span><span class="value">365-Night
            Trial</span></div>
      </div>
      <div class="spcls__summary-item"> <img src="https://mattressverdict.com/img/spcls__icon2.svg" alt="icon" width="24" height="20">
        <div class="spcls__summary-item__text"><span class="title">Warranty</span><span class="value">Lifetime</span>
        </div>
      </div>
      <div class="spcls__summary-item"> <img src="https://mattressverdict.com/img/spcls__icon3.svg" alt="icon" width="21" height="24">
        <div class="spcls__summary-item__text"><span class="title">Shipping/Returns</span><span class="value">&amp;
            Returns</span></div>
      </div>
      <div class="spcls__summary-item"> <img src="https://mattressverdict.com/img/spcls__icon2.svg" alt="icon" width="24" height="20">
        <div class="spcls__summary-item__text"><span class="title">Mattress Type</span><span class="value">Memory
            Foam</span></div>
      </div>
      <div class="spcls__summary-item"> <img src="https://mattressverdict.com/img/spcls__icon1.svg" alt="icon" width="26" height="13">
        <div class="spcls__summary-item__text"><span class="title">Firmness</span><span class="value">6.5/10</span>
        </div>
      </div>
    </div>
  </div>
  <div class="spcls__line">
    <div class="spcls__offer">Black Friday | Up To 50% OFF + $100 OFF!</div>
    <div class="spcls__btn">
      <a class="btn arrow arrow-white arrow-middle" href=""
        rel="nofollow"
        target="_blank">Check Price</a>
    </div>
  </div>
  <div class="spcls__line">
    <div class="w-full spcls-tabs" id="tabs-2">

      <div class="spcls-tabs__btns flex ">
        <button
          class="spcls-tabs__btn px-4 py-2 bg-[#1FC0C8] text-white rounded focus:outline-none hover:bg-[#238E9B] active"
          type="button"
          data-target="#tabs-2 .tab1"
        >
          Benefits
        </button>
        <button
          class="spcls-tabs__btn px-4 py-2 bg-gray-300 text-gray-700 rounded focus:outline-none hover:bg-gray-400"
          type="button"
          data-target="#tabs-2 .tab2"
        >
          More Details
        </button>
      </div>
    

      <div class="spcls-tabs__panels">
   
        <div class="spcls-tabs__panel tab1 active">
          <ul class="bnfs-list list-disc pl-5  text-[#6C6B6E]">
            <li>Hot sleepers</li>
            <li>Couples</li>
            <li>People on a budget</li>
            <li>All Sleepers</li>
            <li>Best value for money</li>
            <li>Long-lasting materials</li>
          </ul>
        </div>

        <div class="spcls-tabs__panel tab2 hidden">
          <div class="text-[#6C6B6E]">
            <b class="block mb-2 text-[#EDEDED]">Overview</b>
            <p class="mb-4">
              With its 12" profile and 5-layer construction, the Nectar mattress combines traditional and gel-infused memory foam and sets a high standard for quality and affordability. It offers exceptional support, pressure relief, and an advanced cooling system for sustained comfort. Ideal for anyone seeking a comfortable and supportive sleep solution, this mattress also comes with a 365-night home trial and a lifetime warranty.
            </p>
    
            <b class="block mb-2 text-[#EDEDED]">Pros &amp; Cons</b>
            <div class="prcadcns flex gap-4">
              <!-- Pros -->
              <ul class="prcadcns__pros list-disc pl-5 space-y-2 text-[#6C6B6E]">
                <li>It keeps you cool during the night</li>
                <li>A good midline mattress that isn’t too soft or firm</li>
                <li>Award-winning</li>
                <li>Minimal motion transfer</li>
              </ul>
    
              <!-- Cons -->
              <ul class="prcadcns__cons list-disc pl-5 space-y-2 text-[#6C6B6E]">
                <li>Not ideal for lightweight sleepers</li>
                <li>Only one height profile is available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>


  </section>
</div>

    `}function D(){return`
      <!-- Модалка -->
<div
  id="mineDisclosure"
  class="fixed inset-0 bg-black bg-opacity-50  items-center justify-center z-50 hidden"
  role="dialog"
  aria-modal="true"
  tabindex="-1"
>
  <!-- Модалка діалог -->
  <div class="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 md:mx-0 modal-body">
    <!-- Заголовок модалки -->
    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-300">
      <h5 class="text-lg font-semibold">Full Disclosure</h5>
      <button
        type="button"
        class="text-gray-500 hover:text-gray-800"
        id="mineDisclosureClose"
        aria-label="Close"
      >
        &times;
      </button>
    </div>

    <!-- Тіло модалки -->
    <div class="p-6 overflow-y-auto max-h-96">
      <p class="text-sm text-gray-700">
        MattressVerdict.com is a mattress reviews website. Our website compares
        leading brands, provides detailed reviews about the mattresses
        construction, warranty, return policy, and more. We do not list all
        mattress brands out there, nor do we cover all aspects of brands we
        list. We do our best to keep the information accurate, but we can't
        promise you that it is. Mattress companies often change their product
        as well as their prices, warranty periods, and more. The best way to
        get accurate information is to go to their respective official
        websites. We receive referral fees from the brands on the website. We
        do our best to provide accurate information. Fees impact rankings,
        rating, and reviews.
        <br /><br />
        Click here for more information on
        <a
          href="https://mattressverdict.com/how-we-rate"
          class="text-blue-600 hover:underline"
        >
          how we rate
        </a>
      </p>
    </div>
  </div>
</div>

    `}function T(){return`
     <footer class="bg-[#062036] text-white py-8 sm:py-8 text-sm">
        <div class="container mx-auto px-4">
          <div class="flex flex-col items-center text-center space-y-5">
            <!-- Меню -->
            <ul class="flex flex-wrap flex-col md:flex-row justify-center items-center gap-y-2  space-x-3 sm:space-x-0 ">
              <li class="flex items-center">
                <a href="/terms-of-use" rel="nofollow" class="text-white hover:underline text-base">Terms</a>
                <div class="hidden md:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/privacy" rel="nofollow" class="text-white hover:underline text-base">Privacy Policy</a>
                <div class="hidden md:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/privacy-rights" rel="nofollow" class="text-white hover:underline text-base">Privacy Rights Policy</a>
                <div class="hidden md:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/disclaimer" rel="nofollow" class="text-white hover:underline text-base">Disclaimer</a>
                <div class="hidden md:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/how-we-rate" class="text-white hover:underline text-base">How We Rate</a>
                <div class="hidden md:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/contact" class="text-white hover:underline text-base">Contact</a>
                <div class="hidden md:block w-[4px] h-[4px] mx-3 bg-white rounded-full"></div>
              </li>
              <li class="flex items-center">
                <a href="/about" class="text-white hover:underline text-base">About</a>
              </li>
            </ul>
            <!-- copywrite -->
            <span class="text-[#5d6c79] text-xs sm:pt-5 sm:mx-auto sm:max-w-xs sm:w-full border-t md:border-t-0 border-[#506272] pt-5 md:pt-0">
              © 2024 All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    ${D()}  
    `}function A(){document.querySelectorAll(".faq-toggle").forEach(e=>{e.addEventListener("click",()=>{const i=e.querySelector(".arrow-faq"),a=e.nextElementSibling;i.classList.toggle("open"),a.classList.toggle("hidden"),a.classList.toggle("show")})})}document.getElementById("app").innerHTML=`
    <div class="max-w-[1030px] w-full mx-auto">
    ${y()}
    ${M()}
    ${B()}
    ${F()}
    ${T()}
    </div>

 
`;A();document.querySelectorAll(".spcls-tabs").forEach(e=>{const i=e.querySelectorAll(".spcls-tabs__btn"),a=e.querySelectorAll(".spcls-tabs__panel");i.forEach(r=>{r.addEventListener("click",()=>{i.forEach(t=>t.classList.remove("bg-[#1FC0C8]","text-white","active")),r.classList.add("bg-[#1FC0C8]","text-white","active");const s=r.getAttribute("data-target");a.forEach(t=>t.classList.add("hidden")),a.forEach(t=>t.classList.remove("active")),e.querySelector(s).classList.remove("hidden"),e.querySelector(s).classList.add("active")})})});const d=document.getElementById("mobile-menu-toggle"),n=document.getElementById("top-nav");d.addEventListener("click",()=>{n.classList.toggle("hidden")});function C(e){!n.contains(e.target)&&!d.contains(e.target)&&n.classList.add("hidden")}document.addEventListener("click",C);function m(e){document.getElementById(e).classList.remove("hidden"),document.getElementById(e).classList.add("flex")}function p(e){document.getElementById(e).classList.remove("flex"),document.getElementById(e).classList.add("hidden")}document.querySelector("#openDiscosure").addEventListener("click",()=>{m("mineDisclosure")});document.querySelector(".disclosure-link ").addEventListener("click",()=>{m("mineDisclosure")});document.querySelector("#mineDisclosureClose").addEventListener("click",()=>{p("mineDisclosure")});document.querySelector("#mineDisclosure").addEventListener("click",e=>{e.target===document.getElementById("mineDisclosure")&&p("mineDisclosure")});
