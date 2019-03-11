// @flow
import Component from './component.js';
import PizzaThumbnail from './pizza.js';
import Page from './page.js';

export default class HomePage extends Page{
	
	data: Array<{nom: string,base: string,prix_petite: number, prix_grande: number}>;

	constructor(data:  Array<{nom: string,base: string,prix_petite: number, prix_grande: number}>){
		super('La Carte', new Component('section', null , data.map(d => new PizzaThumbnail(d).render())));
		this.data = data;
	}
	
}

