import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

@Component({
  selector: 'my-app',
  template: `
     <div><h1 innerText={{pageTitle}}></h1>
         <pm-products></pm-products>
     </div>
  `,
  directives: [ProductListComponent],
  providers: [ProductService] // adicionando o servico para toda a aplicação
})

export class AppComponent {
  pageTitle: string = "Acme Product Management"
}
