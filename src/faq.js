export function initFaqToggle() {
    document.querySelectorAll('.faq-toggle').forEach(button => {
      button.addEventListener('click', () => {
        const arrow = button.querySelector('.arrow');
        const answer = button.nextElementSibling;
  
        arrow.classList.toggle('open');
        answer.classList.toggle('hidden');
        answer.classList.toggle('show');
      });
    });
  }
  