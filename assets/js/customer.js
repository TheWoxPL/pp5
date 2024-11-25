"use strict";
class Customer {
    constructor() {
        this.firmName = "";
        this.nip = "";
        this.miasto = "";
        this.ulica = "";
        this.numerDomu = "";
        this.numerMieszkania = "";
        this.kodPocztowy = "";
        this.uwagi = "";
        this.aktywny = "";
    }
    getData() {
        return this.firmName + " " + this.nip + " ";
    }
    getAddress() {
        return this.miasto + " " + this.numerDomu + " " + this.kodPocztowy + " ";
    }
}
class Supplier extends Customer {
    constructor() {
        super();
        this.invoices = [];
    }
}
