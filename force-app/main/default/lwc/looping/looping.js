import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    carList = ["Ford","Audi","BMW","Maruti","Hyundai"];

    ceoList = [
        {
            id : 1,
            name : "Sundar Pichai",
            company : "Google"
        },
        {
            id : 2,
            name : "Tim Cook",
            company : "Apple"
        },
        {
            id : 3,
            name : "Facebook",
            company : "Mark Zuckerberg"
        },
        {
            id : 4,
            name : "Jeff Bezos",
            company : "Amazon"
        }
    ]
}