// @flow
import Component from './component.js';

 export default class Img extends Component{
	constructor(path: string){
		super('img',{name:'src', value:`${path}`}, null);
	}

}