'use strict';

const buttonHamburguer = document.querySelector('.js-hamburguer');
const menu = document.querySelector('.js-menu');
const listClick = document.querySelectorAll('.js-listClick');
const page = document.querySelector('.js-body');

for (const titleToClick of listClick) {
	titleToClick.addEventListener('click', closeMenu);
}

function closeMenu(ev) {
	ev.stopPropagation();
	const linkCloseMenu = ev.currentTarget.parentNode.querySelector('.js-link');
	const links = document.querySelectorAll('.js-link');
	for (const linkToClick of links) {
		if (linkCloseMenu === linkToClick) {
			menu.classList.add('hidden');
		}
	}
}

function handlerClickButton(ev) {
	ev.stopPropagation();
	menu.classList.toggle('hidden');
}

function handlerClickPage(ev) {
	ev.stopPropagation();
	if (ev.target.id === 'list') {
		menu.classList.remove('hidden');
	} else {
		menu.classList.add('hidden');
	}
}

buttonHamburguer.addEventListener('click', handlerClickButton);
page.addEventListener('click', handlerClickPage);
