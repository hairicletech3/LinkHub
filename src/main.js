lucide.createIcons();

function markStepDone(step) {
  const circle = document.getElementById(`step-${step}`);
  if (!circle) return;
  circle.classList.add('bg-accent-2', 'text-[#f2f3f5]');
  circle.classList.remove('bg-bg', 'text-accent-2');
}

document.querySelectorAll('[data-step]').forEach((link) => {
  const step = link.getAttribute('data-step');
  if (localStorage.getItem(`anclehai-step-${step}`) === 'done') {
    markStepDone(step);
  }
  link.addEventListener('click', () => {
    localStorage.setItem(`anclehai-step-${step}`, 'done');
    markStepDone(step);
  });
});
