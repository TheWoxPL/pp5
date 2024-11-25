class Customer {
  firmName: string = ""
  nip: string = ""
  miasto: string = ""
  ulica: string = ""
  numerDomu: number = 0
  numerMieszkania = ""
  kodPocztowy: string = ""
  uwagi: string = ""
  aktywny: boolean = false

  getData(): string {
    return this.firmName + " " + this.nip + " ";
  }
  getAddress(): string {
    return this.miasto + " " + this.numerDomu + " " + this.kodPocztowy + " ";
  }
}

