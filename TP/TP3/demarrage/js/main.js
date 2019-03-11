// @flow
import HomePage from './HomePage.js';
import data from './data.js';
import PageRenderer from './PageRenderer.js';
import AddPizzaPage from './AddPizzaPage.js';

PageRenderer.titleElement = document.querySelector('.pageTitle');
PageRenderer.contentElement = document.querySelector('.pizzasContainer');
const appContainerElement:?HTMLElement = document.querySelector('#appContainer');

const homePage:HomePage = new HomePage([]);
PageRenderer.renderPage( homePage ); // page vide
homePage.data = data;
PageRenderer.renderPage( homePage ); // liste des vidéos
/*console.log(document.querySelector('#appContainer'));
console.log(document.querySelector('.navbar-brand img'));
console.log(document.querySelector('.pizzaFormButton'));
console.log(document.querySelector('footer a'));
console.log(document.querySelector('.infos h4'));

console.log(document.querySelectorAll('.navbar-right a'));

console.log(document.querySelectorAll('.infos li'));

console.log(document.querySelector('.media:nth-child(2) h4'));

document.querySelectorAll('h4')[1].innerHTML = 'Savoyarde';
document.querySelector('.navbar-brand').innerHTML += `<small class="label label-success">les pizzas c'est la vie</small>`;

console.log(document.querySelectorAll('footer a')[1].getAttribute('href'));
console.log(document.querySelector('.navbar-right > li').setAttribute('class','active'));
*/
const link:?HTMLElement = document.querySelectorAll('.navbar-right a');

const addPizzaPage = new AddPizzaPage();

function handleClick( event:Event ) {
    event.preventDefault();
    console.log(`${event.currentTarget.innerHTML}`);
    const parents = document.querySelectorAll('.navbar-right a');
    parents.forEach(p =>{
        p.parentElement.setAttribute('class','');
    });
    event.currentTarget.parentElement.setAttribute('class','active');

    if( event.currentTarget.innerHTML === `Ajouter une Pizza`){
        
        PageRenderer.renderPage(addPizzaPage);
    }
    
}
link.forEach(l =>{
    l.addEventListener('click', handleClick);

});
