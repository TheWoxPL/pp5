import { Inject, Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() {
  }

  private customersList: Customer[] = [];

  addCustomer(customer: Customer){
    this.customersList.push(customer);
    console.log(customer);
  }

  getCustomers(): Customer[]{
    return this.customersList
  }

}
