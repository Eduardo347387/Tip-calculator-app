
class Propina{
    constructor(bill,numberPeople,tip){
        this.bill = bill;
        this.numberPeople = numberPeople;
        this.tip = tip;
    }

    calculateAdditionalTip(){
        let tipToPay = (this.bill / this.numberPeople) * (this.tip / 100) 
        return tipToPay;
    }
}