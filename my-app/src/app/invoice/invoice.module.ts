import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { InvoiceRoutingModule } from '../invoice-routing.module';



@NgModule({
  declarations: [CustomerFormComponent, CustomerListComponent],
  exports: [CustomerFormComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
