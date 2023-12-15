import { bill,buttons,custom,numPerson,tipAmount,total,reset } from "../selectores.js";
import { validateInputData,unlockInputButtons } from "../funciones.js";


class App{
    constructor(){
        this.initApp()
    }

    initApp(){  
        // custom.addEventListener('input',)
        bill.addEventListener('input',validateInputData)
        numPerson.addEventListener('input',validateInputData)
    }
}

export default App;