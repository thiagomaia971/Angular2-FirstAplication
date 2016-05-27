import { Component } from '@angular/core';

// Route

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

// HTTP request
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx'; // Load all features

//Welcome 
import { WelcomeComponent } from './home/welcome.component';

// Product List
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

// Product Detail
import { ProductDetailComponent } from './products/product-detail.component';

@Component({
  selector: 'my-app',
  templateUrl : 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS] // adicionando o servico para toda a aplicação
})

@RouteConfig([
  { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
  { path: '/products', name: 'Products', component: ProductListComponent},
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
])

export class AppComponent {
  pageTitle: string = "Acme Product Management"
}
