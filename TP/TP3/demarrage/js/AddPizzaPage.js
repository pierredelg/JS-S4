import Page from './Page.js';

export default class AddPizzaPage extends Page {

    constructor(){
        super('Ajouter une pizza');
        
    }
   
    render():string {
        return `<form class="addPizzaPage">
            <label>
                Nom :
                <input type="text" name="nom" class="form-control">
            </label>
            <button type="submit" class="btn btn-default">Ajouter</button>
        </form>`;
    }
    submit(event:Event):void {
        event.preventDefault();
        console.log(document.querySelector('input[name=nom]').value);
    }
    mount(){
        const form:?HTMLElement = document.querySelector('.addPizzaPage');
        form.addEventListener('submit',this.submit);
    }
}