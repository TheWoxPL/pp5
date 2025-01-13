import { Inject, Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(
    private httpClient: HttpClient
  ) {}

  private baseUrl = 'http://localhost:3000/customers';
  private customersList: Customer[] = [];

  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl,customer)
    // this.customersList.push(customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient
    .get<Customer[]>(this.baseUrl)
    .pipe(
      map((customers: Customer[]) => 
        customers.map((customer) => new Customer().deseralize(customer))
      )
    )
    // return this.customersList
  }

  removeCustomer(customer: Customer) {
    this.customersList = this.customersList.filter((x: Customer) => {
      return x.nip !== customer.nip
    })
    return this.customersList;
  }
}
