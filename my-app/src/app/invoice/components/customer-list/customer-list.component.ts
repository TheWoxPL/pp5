import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  constructor(
    private customerService: CustomerService,
    private router: Router
  ){
    this.customersList = customerService.getCustomers();
  }

  customersList: Customer[] = [];
}
