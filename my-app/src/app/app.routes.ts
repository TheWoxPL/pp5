import { Routes } from '@angular/router';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';
import { ProductFormComponent } from './product-module/product-form/product-form.component';

export const routes: Routes = [
    {path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)},
    {path: 'product-form', component: ProductFormComponent}
];
