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
  