// @flow
import Page from './page.js';

export default class PageRenderer {

    static titleElement: HTMLElement;
    static contentElement: HTMLElement;
    
    static renderPage(page: Page){
        if(this.titleElement != null){
            this.titleElement.innerHTML = page.renderTitle();
        }
        if(this.contentElement != null){
            this.contentElement.innerHTML = page.render();
        }
    }
}