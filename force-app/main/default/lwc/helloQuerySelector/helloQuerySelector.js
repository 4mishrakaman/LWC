import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    handleClick()
    {
        const elem = this.template.querySelector('h1');
        console.log(elem.innerText);
    }
}