import faqData from '../assets/data/faq.json';
export default function Sidebar() {
  const commonQuestionsHtml = faqData
    .map(
      ({ question, answer }) => `
      <div class="faq-item">
        <!-- Question -->
        <button class="faq-toggle">
          <span class="arrow-faq relative hover:underline flex text-start text-[15px] pl-5">${question}</span>
        </button>

        <!-- Answer -->
        <p class="faq-answer hidden mt-2 text-[#D7D7D6] pl-5">
          ${answer}
        </p>
      </div>
    `
    )
    .join('');



    return `
      <aside class="bg-[#545453] text-white p-6 space-y-8 h-full">
        <div class="flex items-center justify-center p-4  shadow-[0px_0px_5px_2px_#7E7E7E4D] border-[1.5px] border-[#AFAFAF] ">
          <div class="text-center">
            <h2 class="text-white text-[28px] font-semibold">
                19,652,018
            </h2>
            <div class="text-[#E5E5E5] mt-1.5 text-[13px] leading-[21px] font-medium">
                people have compared and chosen their mattress with
            </div>
            <div class="flex items-center justify-center gap-1.5 mt-3 text-[13px] leading-[21px] font-semibold">
                <img src="./assets/images/mv-logo.png" alt="verdict-logo" class="w-7 h-7"> 
                <span class="text-[#e5e5e5] font-semibold">MATTRESS VERDICT</span>
            </div>
          </div>
        </div>

        <!-- Common Questions -->
        <div>
          <h2 class="text-[17px] font-semibold text-center mb-4 border-b border-[#D7D7D6] pb-2">Common Questions</h2>

          <div class="flex flex-col gap-[10px]">
            ${commonQuestionsHtml}
          </div>

        </div>
  
        <!-- Most Popular Articles -->
        <div>
          <h2 class="text-[17px] font-semibold text-center mb-4 border-b border-[#D7D7D6] pb-2">Most Popular Articles</h2>
          <div class="space-y-6">
            <!-- Article 1 -->
            <div>
              <h3 class="text-[#4A89E1] font-bold">
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
              <h3 class="text-[#4A89E1] font-bold">
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
              <h3 class="text-[#4A89E1] font-bold">
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

          <!-- Ranking Method -->

          <div class=" mt-10 flex flex-col items-center justify-center p-4 shadow-[0px_0px_5px_2px_#7E7E7E4D] border-[1.5px] border-[#AFAFAF]  ">

            <div class="text-white mb-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <mask id="mask0_47_12525" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                  <rect width="27.15" height="27.15" fill="url(#pattern0_47_12525)"/>
                  </mask>
                  <g mask="url(#mask0_47_12525)">
                  <rect x="1" y="1" width="25" height="25" fill="white"/>
                  </g>
                  <defs>
                  <pattern id="pattern0_47_12525" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_47_12525" transform="scale(0.0357143)"/>
                  </pattern>
                  <image id="image0_47_12525" width="28" height="28" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAahJREFUSEvdlu0xBEEQht/LgAQUCSgiQAJk4IgACVAkQAY+IuASoCRAScBHApQAsM9V99XY2o+eq3E/9J/dup3rZ/rtnu4ZaMY2mDFP0wC3JR1LOpd0krvhXOCipFtJPLENSXc50CgQABGtSJqTdCWJSDGAB5IeI+Ao8NIAOOX9TNKOpD3bxH0V+VpJ4LpJCRAZP8z5afW+b7k8KgnEl0fpeUPad0nh6HASlZS1VOZhVTAXJiPRIutI0lYkulwg0iFh3djA7l8AkZCIXqwyyeuqVS+/hSwqKVK2RUEBIS9Hw4upFR4BEhVn8M2iqzsj8mXLba+0ESCdBfm61j5YQ1jq0zUKpMPMdzhjU31rxn+PAmltXbuPqPA/gMhOEblRtb8qt7SkTWm+tiM1BpcG0ubSMUUhbabNvTSwyd93ekbTBZy1YTLNXR6f7tNWKcDJRHEgTp+NgNaf9r5gT3plUaBPgqY7yms1lr5KA33W0f3rdxO/NBWN0IE4rY+aG0lIy2bajDU08KZNcSt48juP55DDSh6bbl5eNF0zr2sN3yYNIHIs+gZA1vcfhnxkHfV+pN8AAAAASUVORK5CYII="/>
                  </defs>
                </svg>

            </div>

      
            <h2 class="text-white text-[18px] font-semibold text-center">
                Our Ranking Method
            </h2>

       
            <div class="text-[#E5E5E5] text-[12px] font-medium leading-[20px] mt-2 text-center">
                Learn more about how we rate the mattresses
            </div>

         
            <div id="collapsibleContainer" class="flex flex-col items-center ">
             
                <div id="collapsibleText" class="text-[#E5E5E5] hidden transition-opacity duration-600">
                    <div class="mb-4 text-[11px]">
                        At our mattress comparison website, we strive to provide reliable and trustworthy information. Our rating system takes into account various factors to ensure accurate evaluations and personalized recommendations for each visitor. Here's what we consider when ranking mattress models and brands:
                    </div>

                    <ul class="list-disc list-inside space-y-1 text-[11px]">
                        <li>Price</li>
                        <li>Materials</li>
                        <li>Mattress Construction</li>
                        <li>Return Policy</li>
                        <li>Warranty</li>
                        <li>Company Stability</li>
                        <li>Consumer Feedback</li>
                        <li>Brand Popularity</li>
                        <li>Conversion Rate <span class="italic">(An indicator of customer confidence, measured by the number of purchases made after visiting our site)</span></li>
                    </ul>
                </div>

                <button id="toggleButton" class="mt-4 transition-transform duration-600">
                    <svg id="chevron" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
          </div>

          <!-- Why Compare With Us? -->
          <div class=" mt-5 flex flex-col items-center justify-center p-4 shadow-[0px_0px_5px_2px_#7E7E7E4D] border-[1.5px] border-[#AFAFAF] ">
         
           
            <h2 class="text-white text-[18px] font-semibold text-center">
                Why Compare With Us?
            </h2>

       
            <div class="flex items-start gap-4 mb-2 mt-2 text-[12px] leading-[20px]">
              
                <div class="w-6 h-6 mt-1">
                  <img src="./assets/images/icon-info.svg" alt="secure badge" class="w-6 h-6">
                </div>
           
                <div class="flex-1 font-medium">
                    <h3 class="text-white text-[13px]">Knowledge at Your Fingertips</h3>
                    <p class="text-[#E5E5E5] mt-1">
                        Our team has invested over 500+ hours in extensive research to provide comprehensive information on top mattresses.
                    </p>
                </div>
            </div>

            <div class="flex items-start gap-4 mb-2  mt-2 text-[12px] leading-20px]">
                <div class="w-6 h-6">
                  <img src="./assets/images/icon-like.svg" alt="secure badge" class="w-6 h-6">
                </div>
               
                <div class="flex-1 font-medium">
                    <h3 class="text-white text-[13px]">Confident Decision-Making</h3>
                    <p class="text-[#E5E5E5] mt-1">
                        Browse our curated list to find the perfect mattress that meets your preferences and needs. Our in-depth reviews will help you make an informed choice.
                    </p>
                </div>
            </div>

        
                <div class="flex items-start gap-4  mt-2 text-[12px] leading-[20px]">
                 <div class="w-6 h-6">
                  <img src="./assets/images/icon-guard.svg" alt="secure badge" class="w-6 h-6">
                </div>
              
                <div class="flex-1 font-medium">
                    <h3 class="text-white text-l[13px]">Security and Trust</h3>
                    <p class="text-[#E5E5E5] mt-1">
                        We exclusively compare mattresses from reputable, top brands that prioritize high-security standards for a secure shopping experience.
                    </p>
                </div>
            </div>
        </div>


        </div>
      </aside>
    `;
  }
  