// @flow
import Component from "./component";

export default class Page extends Component{

    #title: string;
    children: void | null | string | Component | Array<string|Component>;

    constructor(title: string, children: void| null | string | Component | Array<string|Component>){
        
        super('section',null,children);
        this.#title = title;

    }
    renderTitle(): string{
        let result: string = "<h1> ";
        result += this.#title;
        result += " </h1>";
        return result;
    }
}