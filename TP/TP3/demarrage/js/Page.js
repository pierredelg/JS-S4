// @flow
import Component from './Component.js';

export default class Page extends Component {
	#title:string;
	constructor( title:string, children:void|string|Array<string|Component> ){
		super('section', null, children);
		this.#title = title;
	}

	renderTitle():string {
		return `<h1>${this.#title}</h1>`;
	}
	mount():void {
		// par défaut, cette méthode ne fait rien
		// ce sont les classes filles qui devront surcharger cette méthode
	}
}
