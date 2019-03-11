// @flow
import data from './data.js';
import Component from './component.js';
import HomePage from './homePage.js';
import PageRenderer from './pageRenderer.js';

// const title = new Component( 'h1', null, ['La', ' ', 'carte'] );
// const titleElement:?HTMLElement = document.querySelector('.pageTitle');
// if ( titleElement ) {
// 	titleElement.innerHTML = title.render();
// }

// const pt = new HomePage(data);
// const pizzasContainer:?HTMLElement = document.querySelector('.pizzasContainer');
// if ( pizzasContainer ) {
// 	pizzasContainer.innerHTML = pt.render();
// }

let homePage:HomePage = new HomePage([]);
PageRenderer.renderPage( homePage ); // affiche une page vide
homePage.data = data;
PageRenderer.renderPage( homePage ); // affiche la liste des pizzas