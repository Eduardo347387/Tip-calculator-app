import UI from "./classes/UI.js";
import { buttons,custom } from "./selectores.js";

export const ui = new UI()

export function validateInputData(e){

    if(e.target.value.trim() === '' ){
        ui.printAlert('requiered field',e.target.parentElement.children[0])
        return
    }
    else if(isNaN(e.target.value)){
        ui.printAlert('Value invalid',e.target.parentElement.children[0])
        return
    }
    else{
        ui.clearHTML(e.target.parentElement.children[0])
    }   
}


export function unlockInputButtons(estado){
    if(estado){
        buttons.forEach(button=>{
            button.removeAttribute('disabled');
            button.classList.add('active')
        })
        custom.removeAttribute('disabled');
        custom.classList.add('active')
    }
}




