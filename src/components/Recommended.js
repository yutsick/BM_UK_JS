import data from '../assets/data/recommended.json';

export default function RotatedTable() {
  const renderedColumns = data
    .map(
      ({
        brand_link,
        brand_logo,
        model,
        material,
        cooling,
        firmness,
        motion_isolation,
        trial_period,
        shipping_returns,
        warranty,
        price_level,
        special_sales,
        cta_link,
      }) => {

        let priceLeveleImg = Array(4)
          .fill('./assets/images/icon-dollar_gray.svg')
          .fill('./assets/images/icon-dollar.svg', 0, price_level)
          .map(
            (icon) =>
              `<img width="21px" height="21px" src="${icon}" alt="Dollar">`
          )
          .join('');

        return `
          <div class="flex">
            <div class="grid grid-rows-13 w-[240px] md:w-[170px]">
              <a class="cell-style text-color-blue font-bold" href="${brand_link}">
                <img src="${brand_logo}" class="max-w-[75%] py-2">
              </a>
              <div class="cell-style text-[#727271]">
                <a href="${brand_link}" class="text-color-blue underline">Read Review</a>
              </div>
              <div class="cell-style text-[#727271]">${model}</div>
              <div class="cell-style text-[#727271]">${material}</div>
              <div class="cell-style text-[#727271]">${cooling}</div>
              <div class="cell-style text-[#727271]">${firmness}</div>
              <div class="cell-style text-[#727271]">${motion_isolation}</div>
              <div class="cell-style text-[#727271]">${trial_period}</div>
              <div class="cell-style text-[#727271]"><img src="https://mattressverdict.com/img/check-yes.svg"></div>
              <div class="cell-style text-[#727271]">${warranty}</div>
              <div class="cell-style text-[#727271]">${priceLeveleImg}</div>
              <div class="cell-style text-color-red font-bold">${special_sales}</div>
              <div class="cell-style">
                <a class="w-[130px] h-[50px] flex items-center justify-center bg-[#1FC0C8] border-b-[5px] border-b-[#238E9B] text-white px-4 py-1 rounded-[10px] hover:bg-[#238E9B] arrow arrow-white" href=${cta_link}>Visit site</a>
              </div>
            </div>
          </div>
        `;
      }
    )
    .join('');

  return `
    <div class="mt-10 ">
      <h2 class="ml-2 md:ml-0 uppercase font-bold text-[#237999] text-[25px]">COMPARING OUR TOP 5 BEST MATTRESSES ONLINE</h2>
      <div class="flex border-x">
        <!-- Headers -->
        <div class="grid grid-rows-13 w-[160px] md:w-[178px] bg-white  pb-[6px]">
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
          ${renderedColumns}
        </div>

      </div>
    </div>
  `;
}
