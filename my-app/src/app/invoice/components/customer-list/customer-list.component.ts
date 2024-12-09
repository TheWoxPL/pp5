import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit, OnDestroy {
  constructor(
    private customerService: CustomerService,
    private router: Router
  ){
    this.customersList = customerService.getCustomers();
  }
  ngOnDestroy(): void {
    console.log('opuszczanie komponenta')
  }
  ngOnInit(): void {
    this.customersList=this.customerService.getCustomers()
  }

  redirectToForm(){
    this.router.navigate(['/invoice/customer-form']);
  }

  deleteCustomer(customer: Customer){
    console.log("rodzic ma usunąć: ", customer)
    this.customersList = this.customerService.removeCustomer(customer);
  }


  customersList: Customer[] = [];
}
