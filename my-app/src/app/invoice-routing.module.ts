import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './invoice/components/customer-list/customer-list.component';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';


const routes: Routes = [
  {
    path: 'customer-list',
    component: CustomerListComponent
  },
  {
    path: 'customer-form',
    component: CustomerFormComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
