class Invoice {
    // constructor(name: string, quantity: number){
    //     this.name=name
    //     this.quantity=quantity
    // }
    name: string = "";
    quantity: number = 0;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}

