import data from './data.js';
import Component from './component.js';
import HomePage from './homePage.js';
var title = new Component('h1', null, ['La', ' ', 'carte']);
document.querySelector('.pageTitle').innerHTML = title.render();
var pt = new HomePage(data);
document.querySelector('.pizzasContainer').innerHTML = pt.render();
//# sourceMappingURL=main.js.map