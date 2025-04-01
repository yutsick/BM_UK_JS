export default function TopBar(){
  return `
   <div class="hidden md:flex h-12 bg-[#062036] justify-center">
    <div class="max-w-[1180px] mx-auto relative w-full">
      <a href="/" class=" h-full flex items-center justify-center gap-4">
        <img src="./assets/images/mv-logo.png" alt="Logo" class="w-6 h-6">
        <div class="uppercase text-[14px] font-semibold text-white tracking-[5.5px]">mattress verdict</div>
      </a>
      <div class="absolute right-0 top-[50%] -translate-y-[50%] z-1 ">
        <img src="./assets/images/secure-badge.svg">
      </div>
    </div>

  </div>
  `
}