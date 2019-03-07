// @flow
export default class Component{
	tag: string;
	attribute:?{name:string,value:string};
	children: void |string | Component | Array<string | Component>;
	attributeEmpty: boolean = false;
	childrenEmpty: boolean = false;

	constructor(tag: string,attribute: ?{name:string,value:string},children: void | string | Component | Array<string | Component>){
		this.tag = tag;
		this.attribute = attribute;
		this.children = children;
		this.attributeEmpty = (this.attribute === null || this.attribute === undefined);
		this.childrenEmpty = (this.children === null || this.children === undefined);
  }
    
	renderAttribute(): string{

		if(this.attribute != null){

			return ` ${this.attribute.name}="${this.attribute.value}"`;
		}
		return '';
		
	}

	renderChildren(): string{

		if(this.children instanceof Component){
			
			return this.children.render();
		}
		if(this.children instanceof Array){
			let child: string = "> ";

			for(let i: number = 0 ; i < this.children.length;i++){
				
				if(this.children[i] instanceof Component){
					
					child += this.children[i].render();
					
				}else{
					if(this.children[i] != undefined){
						child += this.children[i];
					}
				}	
				
			}
			return `
				${child}
				`;
		}
			if (this.children != null){
				return `
				${this.children}
				`;
			}
			return '';
		
	}
	render(): string{
		let result: string = "";
		
		result = `<${this.tag}`;
		if(!this.attributeEmpty){
			
				result += this.renderAttribute();
			
		}
		if(!this.childrenEmpty){
			
				result += this.renderChildren();
			
		}
		if(this.attributeEmpty && this.childrenEmpty){	
			result += "/> ";
		}
		else{
			if(this.childrenEmpty){
				result += "> ";
			}else{
				result += `</${this.tag}>`;
			}
		}
		return result;
	}
}