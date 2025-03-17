const apiPath = 'https://jsonplaceholder.typicode.com/users';
const fetchButton = document.querySelector('.fetch-btn');
const usersContainer = document.querySelector('.candidates__container');

const createTextField = (text) => {
   const p = document.createElement('p');
   p.textContent = text;
   return p;
};

const createUser = (data) => {
   const div = document.createElement('div');
   const imageDiv = document.createElement('div');
   const image = document.createElement('img');
   const contentDiv = document.createElement('div');

   div.classList.add('candidates__item');
   imageDiv.classList.add('candidates__item-image');
   contentDiv.classList.add('candidates__item-content');
   image.src = data?.image ?? './user-icon.png';

   div.append(imageDiv, contentDiv);
   imageDiv.append(image);

   const { name, phone, email, website } = data;
   [name, phone, email, website].forEach((item) => {
      if (item) {
         contentDiv.append(createTextField(item));
      }
   });
   return div;
};

const appendUsers = async (users) => {
   if (usersContainer && users) {
      usersContainer.innerHTML = '';
      fetchButton.textContent = 'Refresh';
      users.forEach((user) => {
         if (!user) {
            return;
         }
         const newUserField = createUser(user);
         if (newUserField) {
            usersContainer.append(newUserField);
         }
      });
   }
};

const handleUsersLoad = async () => {
   try {
      const response = await fetch(apiPath);

      if (!response.ok) {
         throw new Error("Error occured. Can't load data");
      }

      const data = await response.json();

      appendUsers(data);
   } catch (error) {
      console.log(error);
   }
};

fetchButton.addEventListener('click', handleUsersLoad);
