/*data = [
	{
		nom: 'Regina',
		base: 'tomate',
		prix_petite: 5.5,
		prix_grande: 7.5
	},
	{
		nom: 'Napolitain',
		base: 'tomate',
		prix_petite: 6.2,
		prix_grande: 8
	},
	{
		nom: 'Spicy',
		base: 'crème',
		prix_petite: 6.5,
		prix_grande: 9.95
	},
];
*/
class Animal {
	constructor( name ){
		this.name = name;
	}
	fly() { // déclaration de méthode
		console.log(`${this.name} is flying now !`);
	}
}
const threeEyedRaven = new Animal( 'Bran' );

threeEyedRaven.fly();

class Component{
	constructor(tag, attribute, children){
		this.tag = tag;
		this.attribute = attribute;
		if(attribute != null || attribute != undefined){
			this.attribute.name=attribute.name;
			this.attribute.value=attribute.value;
		}
		this.children = children;
		
	}
	renderAttribute(){

		return `${this.attribute.name}="${this.attribute.value}"`
	}

	renderChildren(){
		if(this.children instanceof Component){
			return this.children.render();
		}
		if(this.children instanceof Array){
			let child = "";

			for(let i = 0 ; i < this.children.length;i++){
			
				child = child + this.children[i];	
				
			}
			return `
						${child}
					`
		}
		
		if(attributeEmpty){
			return `
				${this.children}
				`
		}
	}
	render(){
		
		let attributeEmpty = this.attribute === null || this.attribute === undefined;
		let childrenEmpty = this.children === null || this.children === undefined;

		let result;
		
		result = `<${this.tag} `
		if(!attributeEmpty){
			result += this.renderAttribute();
		}
		if(!childrenEmpty){
			result += this.renderChildren();
		}
		if(attributeEmpty && childrenEmpty){	
			result += "/>";
		}
		else{
			if(childrenEmpty){
				result += ">";
			}else{
				result += `</${this.tag}>`;
			}
		}
		return result;
	}
}

class Img extends Component{
	constructor(path){
		super('img',{name:'src', value:`${path}`}, null);
	}

}
const title = new Component( 'h1', null, ['La', ' ', 'carte'] );
console.log("tag =" + title.tag);
console.log("attribute = " + title.attribute);
console.log("children = " + title.children);
document.querySelector('.pageTitle').innerHTML = title.render();
const img = new Img('images/regina.jpg');
document.querySelector('.pizzasContainer').innerHTML = img.render();
// const c = new Component( 'article', {name:'class', value:'media'},
//  [new Img('images/regina.jpg'),'Regina']);
// console.log("c tag = "+c.tag);
// console.log("c attribute name = "+c.attribute.name);
// console.log("c attribute value = " + c.attribute.value);
// console.log("c children 1 = "+c.children[0]);
// console.log("c children 2 = "+c.children[1]);
// console.log("c children 1 tag = "+c.children[0].tag);
// console.log("c children 1 attribute = "+c.children[0].attribute);
// console.log("c children 1 children = "+c.children[0].children);

// document.querySelector( '.pizzasContainer' ).innerHTML = c.render();
