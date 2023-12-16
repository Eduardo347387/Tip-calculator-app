import { bill,numPerson,reset,form } from "../selectores.js";
import { validateInputData,ui} from "../funciones.js";


class App{
    constructor(){
        this.initApp()
    }

    initApp(){  
        // custom.addEventListener('input',)
        window.addEventListener('beforeunload',()=>{form.reset();});
        reset.addEventListener('click',ui.clearInterfaceHTML)
        bill.addEventListener('input',validateInputData)
        numPerson.addEventListener('input',validateInputData)
    }
}

export default App;