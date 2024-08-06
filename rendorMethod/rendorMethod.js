import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './rendorMethod.html'

export default class RendorMethod extends LightningElement {

    selectedBtn=''
    render(){
        return this.selectedBtn=== 'signUp' ? signupTemplate :
        this.selectedBtn=== 'signin' ? signinTemplate :
        renderTemplate
    }

    handleClick(event)
    {
        this.selectedBtn=event.target.label
    }

    submitHandler(event){
        console.log(`${event.target.label} Successfull !!` )
    }
}