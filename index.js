document.querySelector('.additional-options .caption-expander').addEventListener('click', (e) => {
   e.currentTarget.classList.toggle('open');
});

document.querySelector('.radio-select .btn-custom').addEventListener('click', (e) => {
   e.currentTarget.classList.toggle('active');
   document.querySelector('.radio-select .size_select').classList.toggle('custom');
});

const tooltipWrappersAll = document.querySelectorAll('.tooltip-wrapper i');

tooltipWrappersAll.forEach((i) =>
   i.addEventListener('click', (e) => {
      e.currentTarget.nextElementSibling.classList.toggle('hidden');
   })
);
