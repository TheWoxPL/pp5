import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductModuleModule } from './product-module/product-module.module';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvoiceModule, ProductModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Wojciech Bubula';
}
