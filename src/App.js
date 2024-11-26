import Header from './components/Header';
import Main from './components/Main';
import Recommended from './components/Recommended';
import InfoBlock from './components/InfoBlock';
import Footer from './components/Footer';
import { initFaqToggle } from './faq.js';
import data from './assets/data/recommended.json';


document.getElementById('app').innerHTML = `
    <div class="max-w-[1030px] w-full mx-auto">
    ${Header()}
    ${Main()}
    ${Recommended(data)}
    ${InfoBlock()}
    ${Footer()}
    </div>

 
`;

initFaqToggle();

document.querySelectorAll('.spcls-tabs').forEach((tabsContainer) => {

    const tabButtons = tabsContainer.querySelectorAll('.spcls-tabs__btn');
    const tabPanels = tabsContainer.querySelectorAll('.spcls-tabs__panel');
  
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        tabButtons.forEach((b) =>
          b.classList.remove('bg-[#1FC0C8]', 'text-white', 'active')
        );
  
        btn.classList.add('bg-[#1FC0C8]', 'text-white', 'active');

        const targetSelector = btn.getAttribute('data-target');
        tabPanels.forEach((panel) => panel.classList.add('hidden'));
        tabPanels.forEach((panel) => panel.classList.remove('active'));
        tabsContainer.querySelector(targetSelector).classList.remove('hidden');
        tabsContainer.querySelector(targetSelector).classList.add('active');
      });
    });
  });
  

const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('top-nav');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

function closeMenu(event) {
  if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    mobileMenu.classList.add('hidden');
  }
}
document.addEventListener('click', closeMenu);


// Modal
function openModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden');
  document.getElementById(modalId).classList.add('flex');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('flex');
  document.getElementById(modalId).classList.add('hidden');
}

document.querySelector('#openDiscosure').addEventListener('click', () => {
  openModal('mineDisclosure');
});
document.querySelector('.disclosure-link ').addEventListener('click', () => {
  openModal('mineDisclosure');
});

document.querySelector('#mineDisclosureClose').addEventListener('click', () => {
  closeModal('mineDisclosure');
});

document.querySelector('#mineDisclosure').addEventListener('click', (event) => {
  if (event.target === document.getElementById('mineDisclosure')) {
    closeModal('mineDisclosure');
  }
  
} );