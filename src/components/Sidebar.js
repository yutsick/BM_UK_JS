import faqData from '../assets/data/faq.json';
export default function Sidebar() {
  const commonQuestionsHtml = faqData
    .map(
      ({ question, answer }) => `
      <div class="faq-item">
        <!-- Question -->
        <button class="faq-toggle">
          <span class="arrow-faq relative hover:underline flex text-start pl-5">${question}</span>
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
      <aside class="bg-[#545B63] text-[#D7D7D6] p-6 space-y-8 h-full">
        <!-- Common Questions -->
        <div>
          <h2 class="text-xl font-semibold text-center mb-4 border-b border-[#D7D7D6] pb-2">Common Questions</h2>

          <div class="flex flex-col gap-[10px]">
            ${commonQuestionsHtml}
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
              <a href="https://mattressverdict.com/comparison/best-mattress" class="text-gray-300 text-sm hover:underline">Read More »</a>
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
              <a href="https://mattressverdict.com/comparison/best-mattress-for-back-pain" class="text-gray-300 text-sm hover:underline">Read More »</a>
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
              <a href="https://mattressverdict.com/comparison/best-memory-foam-mattress" class="text-gray-300 text-sm hover:text-yellow-400">Read More »</a>
            </div>
          </div>
        </div>
      </aside>
    `;
  }
  