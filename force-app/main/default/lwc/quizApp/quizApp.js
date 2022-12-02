import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={} // for storing answers
    correctAnswer= 0;
    isSubmitted = false;
    myQuestions = [
        {
            id : "Question 1",
            question : "Which of the following is not a template loop ?",
            answers : {
                a : "for:each",
                b : "iterator",
                c : "map Loop"
            },
            correctAnswer : "c"
        },
        {
            id : "Question 2",
            question : "Which of the file is invalid in LWC component folder ?",
            answers : {
                a : ".svg",
                b : "apex",
                c : ".js"
            },
            correctAnswer : "b"
        },
        {
            id : "Question 3",
            question : "Which of the following is not a directive ?",
            answers : {
                a : "for:each",
                b : "if:true",
                c : "@track"
            },
            correctAnswer : "c"
        }
    ]

    get allNotSelected()
    {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    get isScoredFull()
    {
        return ` slds-text-heading_medium slds-p-around_medium ${this.myQuestions.length === this.correctAnswer ? 
        'slds-text-color_success' :'slds-text-color_error'}`
    }
    //form changeHandler
    changeHandler(event)
    {
        const {name,value} = event.target;
        this.selected = {...this.selected,[name]:value};
    }
    //form submit handler
    submitHandler(event)
    {
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer);
        this.correctAnswer = correct.length
        this.isSubmitted = true;


    }
    //form reset handler
    resetHandler()
    {
        this.selected={}
        this.correctAnswer=0;
        this.isSubmitted = false

    }



}