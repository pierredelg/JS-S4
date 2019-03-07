// @flow
import data from './data.js';
import Component from './component.js';
import HomePage from './homePage.js';

const title = new Component( 'h1', null, ['La', ' ', 'carte'] );
const titleElement:?HTMLElement = document.querySelector('.pageTitle');
if ( titleElement ) {
	titleElement.innerHTML = title.render();
}

const pt = new HomePage(data);
const pizzasContainer:?HTMLElement = document.querySelector('.pizzasContainer');
if ( pizzasContainer ) {
	pizzasContainer.innerHTML = pt.render();
}
