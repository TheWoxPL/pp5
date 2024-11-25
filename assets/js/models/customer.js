"use strict";
class Customer {
    constructor() {
        this.firmName = "";
        this.nip = "";
        this.miasto = "";
        this.ulica = "";
        this.numerDomu = 0;
        this.numerMieszkania = "";
        this.kodPocztowy = "";
        this.uwagi = "";
        this.aktywny = false;
    }
    getData() {
        return this.firmName + " " + this.nip + " ";
    }
    getAddress() {
        return this.miasto + " " + this.numerDomu + " " + this.kodPocztowy + " ";
    }
}
