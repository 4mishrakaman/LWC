import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    isVisible = false;

    showHandler()
    {
        this.isVisible = true
    }

    hideHandler()
    {
        this.isVisible = false
    }
}