'use strict';

const links = [...document.getElementsByClassName('list-item__link')];
const mainFoto = document.querySelector('.gallery__large-img');

links.forEach((link) => {
  link.addEventListener('click', (even) => {
    even.preventDefault();
    mainFoto.src = link.href;
  });
});
