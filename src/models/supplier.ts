class Supplier extends Customer {
    constructor() {
        super()
    }
    invoices: Array<Invoice> = [];
    accountNumber: number=0;
}