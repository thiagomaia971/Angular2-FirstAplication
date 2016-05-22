import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';

@Component({
  selector: 'my-app',
  template: `
     <div><h1 innerText={{pageTitle}}></h1>
         <pm-products></pm-products>
     </div>
  `,
  directives: [ProductListComponent]
})

export class AppComponent {
  pageTitle: string = "Acme Product Management"
}
