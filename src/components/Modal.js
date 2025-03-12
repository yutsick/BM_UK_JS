
export default function modal() {
    return `
      <!-- Modal window -->
<div
  id="mineDisclosure"
  class="fixed inset-0 bg-black bg-opacity-50  items-center justify-center z-50 hidden"
  role="dialog"
  aria-modal="true"
  tabindex="-1"
>
  <!-- Modal dialog -->
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

    <!-- Modal body -->
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

    `;
  }
