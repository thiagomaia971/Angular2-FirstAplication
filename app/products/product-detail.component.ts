import { Component } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';
import { ProductService } from './product.service';

@Component({
    selector: 'componentName',
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent {
    
    pageTitle: string = 'Product Detail';
    
    constructor(private _productService: ProductService,
                private _routeParams: RouteParams,
                private _router: Router){
                    
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }
    
    onBack(): void {
        this._router.navigate(['Products']);
    }
}