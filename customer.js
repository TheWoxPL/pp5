class Customer{
    firmName=""
    nip=""
    miasto=""
    ulica=""
    numerDomu=""
    numerMieszkania=""
    kodPocztowy=""
    uwagi=""
    aktywny=""

    getData(){
      return this.firmName + " " + this.nip + " " ;
    }
    getAddress(){
      return this.miasto+ " " + this.numerDomu + " " + this.kodPocztowy+ " ";
    }
  }

  class Supplier extends Customer{
    constructor(){
        super()
    }
    invoices=[]
  }