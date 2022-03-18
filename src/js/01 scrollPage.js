'use strict';
const sr = ScrollReveal({
	origin: 'top',
	duration: 1000,
	//reset: true,
});

/*SCROLL HOME*/
// sr.reveal('.home__section--data__title', {});
sr.reveal('.home__section--data__img', { delay: 5000 });
sr.reveal('.home__section--social__icon', { delay: 4000, interval: 150 });

/*SCROLL ABOUT*/
// sr.reveal('.about__img', {});
sr.reveal('.about__section--title', { delay: 400 });
sr.reveal('.about__section--container__subtitle', { delay: 700 });
sr.reveal('.about__section--container__text', { delay: 500, interval: 500 });

/*SCROLL SKILLS*/
sr.reveal('.skills__section--container__subtitle', {});
sr.reveal('.skills__section--title', {});
sr.reveal('.skills__section--container__data', { delay: 600, interval: 600 });

/*SCROLL WORK*/
sr.reveal('.work__section--title', { delay: 400 });
sr.reveal('.work__section--container__list--items', {
	delay: 800,
	interval: 800,
});

/*SCROLL BUTTON UP*/
sr.reveal('.js-buttonUp', { delay: 3000 });
