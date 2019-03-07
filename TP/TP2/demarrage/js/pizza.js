import Component from './component.js';
import Img from './img.js';

// @flow

export default class PizzaThumbnail extends Component{
	constructor(pizza: {nom: string,base: string,prix_petite: number, prix_grande: number}){
		super('article', {name:'class', value:'media'},
			[new Component('a',{name:'href',value:`images/${pizza.nom.toLowerCase()}.jpg`},
				[new Img(`images/${pizza.nom.toLowerCase()}.jpg`),
				new Component('section',{name:'class', value:'infos'},
					[new Component('h4',null,[`${pizza.nom}`]),
					new Component('ul',null,
						[new Component('li',null,['Prix petit format : ',`${pizza.prix_petite}` ,'€']),
						new Component('li',null,['Prix grand format : ',`${pizza.prix_grande}`,'€'])
						]
					)]
				)]
			)
		]);
	}
}