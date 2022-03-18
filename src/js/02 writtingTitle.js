'use strict';

const title = document.querySelector('.js-title');

const titleWritting = (text = '', label = '') => {
  let arrayTitle = text.split('');

  label.innerHTML = '';
  let cont = 0;
  let writing = setInterval(function () {
    label.innerHTML += arrayTitle[cont];
    cont++;
    if (cont === arrayTitle.length) {
      clearInterval(writing);
    }
  }, 80);
};

titleWritting(
  'Hola mundo, mi nombre es Maitane y soy front-end web developer.',
  title
);
