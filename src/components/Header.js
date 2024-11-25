export default function Header() {
    return `
      <header class="relative bg-cover bg-center text-white" style="background-image: url('/assets/images/top-bg.jpg');">
        <div class="bg-black bg-opacity-50">
          <div class="container mx-auto px-6 py-10">
            
            <div class="flex justify-between items-center mb-8">
              
              <div class="flex items-center space-x-2">
                <div class=" text-black font-bold text-lg px-2 py-1 rounded">
                  <img src="./assets/images/mv-logo.png">
                </div>
                <span class=" font-semibold tracking-[3px] w-[95px] text-center leading-[20px] text-small uppercase">Mattress Verdict</span>
              </div>
  
        
              <nav class="hidden md:flex space-x-6 text-lg">
                <a href="#" class="hover:underline decoration-[#4EA3B5] decoration-4">Top 10 Mattresses</a>
                <a href="#" class="hover:underline decoration-[#4EA3B5] decoration-4">Best Mattress Types</a>
                <a href="#" class="hover:underline decoration-[#4EA3B5] decoration-4">Reviews</a>
              </nav>
            </div>
 
            <div class="text-center md:text-left">
              <h1 class="text-3xl md:text-5xl font-bold mb-4">
                Top 10 Best Mattresses In UK: Ratings, Reviews and Sales of Top Mattresses!
              </h1>
              <p class="text-lg md:text-xl mb-4">
                You will spend a third of your life on a mattress. MattressVerdict is here to help you make a better choice when buying an online mattress. We provide detailed reviews of the best mattresses in 2024.
              </p>
              <p class="text-sm text-gray-300">
                Disclosure: We receive referral fees from the brands listed below. <a href="#" class=" underline">More</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    `;
  }
  