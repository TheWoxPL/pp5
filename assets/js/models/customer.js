"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor() {
        this.firmName = '';
        this.nip = '';
        this.miasto = '';
        this.ulica = '';
        this.numerDomu = '0';
        this.numerMieszkania = 'Brak';
        this.kodPocztowy = '';
        this.uwagi = 'Brak';
        this.aktywny = false;
        this.branza = '';
    }
    getData() {
        return `${this.firmName}, NIP: ${this.nip}`;
    }
    getAddress() {
        return `${this.ulica} ${this.numerDomu}, ${this.miasto}, ${this.kodPocztowy}`;
    }
}
exports.Customer = Customer;
