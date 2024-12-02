import { Customer } from './customer';
import { Invoice } from './invoice';

class Supplier extends Customer {
    constructor() {
        super()
    }
    invoices: Array<Invoice> = [];
    accountNumber: number=0;
}