export class Customer {
  firmName: string = '';
  nip: string = '';
  miasto: string = '';
  ulica: string = '';
  numerDomu: string = '0'; 
  numerMieszkania: string = 'Brak';
  kodPocztowy: string = '';
  uwagi: string = 'Brak';
  aktywny: boolean = false;
  branza: string = '';

  getData(): string {
    return `${this.firmName}, NIP: ${this.nip}`;
  }

  getAddress(): string {
    return `${this.ulica} ${this.numerDomu}, ${this.miasto}, ${this.kodPocztowy}`;
  }
}
