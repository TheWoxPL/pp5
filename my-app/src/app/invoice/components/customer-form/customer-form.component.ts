import { Component, Inject } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  handleSubmit(ngForm: NgForm){
    // console.log(ngForm.valid)
    if(ngForm.valid) {
      this.customerService.addCustomer(this.customer)
      this.router.navigate(['/invoice/customer-list'])
      console.log(this.customer);
    }
  }
}
