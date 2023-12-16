
class Propina{
    constructor(bill,numberPeople,tip){
        this.bill = bill;
        this.numberPeople = numberPeople;
        this.tip = tip;
    }

    calculateAdditionalTip(){
        return (this.bill / this.numberPeople) * (this.tip / 100) 
    }

    calculateTotalToPay(){
        return (this.bill / this.numberPeople) + this.calculateAdditionalTip()
    }
}

export default Propina;