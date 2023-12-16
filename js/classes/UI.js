import { buttons,custom,tipAmount,total,bill,numPerson } from "../selectores.js";
import { calcularPropina,propina, ui } from "../funciones.js";
class UI{
    constructor(){

    }

    printAlert(message,reference){
        this.clearHTML(reference)
        let divAlert = document.createElement('P');
        divAlert.className = 'error';
        divAlert.textContent = message
        reference.appendChild(divAlert)
        
    }

    clearHTML(reference){
        let element = reference.querySelector('.error')
        if(element){
            element.remove()
        }
    }

    unlockInputButtons(estado){
        if(estado){
            buttons.forEach(button=>{
                button.removeAttribute('disabled');
                button.classList.add('active')
                button.addEventListener('click',calcularPropina)
            })
            custom.removeAttribute('disabled');
            custom.classList.add('active')
            custom.addEventListener('input',calcularPropina)

        }else{
            buttons.forEach(button=>{
                button.disabled = true
                button.classList.remove('active')
            })
            custom.disabled = true
            custom.classList.remove('active')   
        }
    }

    displayData(){
        tipAmount.textContent = `$${propina.calculateAdditionalTip().toFixed(2)}`
        total.textContent = `$${propina.calculateTotalToPay().toFixed(2)}`
    }

    clearInterfaceHTML(){
        bill.value = ''
        custom.value = ''
        numPerson.value = ''
        tipAmount.textContent = '$0'
        total.textContent = '$0'
        ui.unlockInputButtons(false)
    }
}

export default UI;