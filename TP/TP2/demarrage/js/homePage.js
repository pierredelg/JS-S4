import Component from './component.js';
import PizzaThumbnail from './pizza.js';

// @flow

export default class HomePage extends Component{
	constructor(data:  Array<{nom: string,base: string,prix_petite: number, prix_grande: number}>){
		super('section', null , data.map(d => new PizzaThumbnail(d).render()));
	}
}