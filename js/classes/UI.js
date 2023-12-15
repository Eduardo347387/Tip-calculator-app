
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

}

export default UI;