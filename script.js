const allTitleNodes = document.querySelectorAll('.questions__title');

const questionList = document.querySelector('.questions__list');

const handleQuestionExpand = (e) => {
   e.preventDefault();
   const { target } = e;
   const { className, parentNode } = target;
   const isTitle = className.includes('questions__title');
   if (!isTitle) return;
   if (parentNode.className.includes('active')) {
      return parentNode.classList.remove('active');
   }
   const activeElement = document.querySelector('.questions__item.active');
   parentNode.classList.add('active');
   if (activeElement) {
      activeElement.classList.remove('active');
   }
};

questionList.addEventListener('click', handleQuestionExpand);

// const formElement = document.querySelector('.feedback__form');

// formElement.addEventListener('submit', (e) => {
//    e.preventDefault();
//    const invalidAll = document.querySelectorAll('invalid');

//    console.log('submit');
//    console.log(invalidAll);
// });
