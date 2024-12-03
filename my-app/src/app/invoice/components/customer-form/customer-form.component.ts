import { Component, Inject } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  constructor(
    private customerService: CustomerService,
    private router: Router
  ){}

  customer: Customer = new Customer();
  handleSubmit(){
    this.customerService.addCustomer(this.customer)
    this.router.navigate(['/invoice/customer-list'])
    console.log(this.customer);
  }
}
