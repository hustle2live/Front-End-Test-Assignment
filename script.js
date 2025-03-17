const allTitleNodes = document.querySelectorAll('.questions__title');

const questionList = document.querySelector('.questions__list');

const handleQuestionExpand = async (e) => {
   e.preventDefault();
   const { target } = e;

   if (target.parentNode.className.includes('active')) {
      target.parentNode.classList.remove('active');
      return;
   }

   const activeElement = document.querySelector('.questions__item.active');

   if (activeElement) {
      activeElement.classList.remove('active');
   }

   target.parentNode.classList.add('active');
};

questionList.addEventListener('click', (e) => handleQuestionExpand(e));
