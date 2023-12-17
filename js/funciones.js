import UI from "./classes/UI.js";
import { bill,numPerson,custom } from "./selectores.js";
import Propina from "./classes/propinas.js";

export const ui = new UI()
export let propina
let tip
let button
// let billValue,numPersonValue;

export function validateInputData(e){

    let billValue = parseFloat(bill.value)
    let numPersonValue = parseFloat(numPerson.value)
    
    if(e.target.value.trim() === ''){
        ui.printAlert('requiered field',e.target.parentElement.children[0])
        ui.unlockInputButtons(false)
        return
    }
    else if(isNaN(e.target.value)){
        ui.printAlert('Value invalid',e.target.parentElement.children[0])
        ui.unlockInputButtons(false)
        return
    }
    else{
        // ui.unlockInputButtons(false)
        ui.clearHTML(e.target.parentElement.children[0])
    }  
    /*______________________________________________________________________________________________*/

    //check if both text boxes are filed
    if(!isNaN(billValue) && !isNaN(numPersonValue) && billValue > 0 && numPersonValue > 0){
        ui.unlockInputButtons(true)   
    }
    /*______________________________________________________________________________________________*/
    // if a tip exists
    if(tip){
        propina = new Propina(bill.value,numPerson.value,tip)
        ui.displayData()
    }
}


export function calcularPropina(e){
    e.preventDefault()
    tip = parseInt(e.target.value);

    // if a button already exists remove the class button select
    if(button && button.classList.contains('button-tip')){
        button.classList.toggle('button-select')
    }

    // here store the value button
    button = e.target 
    // if exists a button with the class button-tip add the class button-select 
    if(button.classList.contains('button-tip')){
        button.classList.toggle('button-select')
        custom.value = ''
    }

    if(isNaN(tip) || e.target.value.trim() === ''){
        e.target.style.backgroundColor = 'hsl(0, 83%, 86%)'
        return
    }
    e.target.style.backgroundColor = ''
    propina = new Propina(bill.value,numPerson.value,tip)
    ui.displayData()
}






