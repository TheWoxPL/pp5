"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
class Supplier extends customer_1.Customer {
    constructor() {
        super();
        this.invoices = [];
        this.accountNumber = 0;
    }
}
