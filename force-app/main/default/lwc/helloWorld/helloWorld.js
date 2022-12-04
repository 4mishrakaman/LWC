import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    // Data Binding
    fullName ='Aman Kumar Mishra';
    nativeTown = 'jamshedpur';
    title = '';   

    //method
    changeHandler(event)
    {
        this.title = event.target.value;
    }
//Track
    address = {
        city : 'Melbourne',
        postcode : 3008,
        country : 'Austrailia'
    }

    trackHandler(event){
        this.address = {...this.address, "city" : event.target.value}
    }

//getter
    users =["john","Jack","Smith"];
    num1 = 10;
    num2 = 20;

    get firstUser()
    {
        return this.users[0].toUpperCase();
    }

    get multipleOfNumbers()
    {
        return this.num1*this.num2;
    }
}