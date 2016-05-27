import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { MoneyPipe } from '../shared/money-pipe';
import { StarComponent } from '../shared/star.component'
import { ProductService } from './product.service';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe, MoneyPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    listFilter: string = ''; 
    
    errorMessage: string;
    
    products: IProduct[];
    
    constructor(private _productService: ProductService){
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void{
        console.log('In OnInit');
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error
            );
    }
    
    onRatingClicked(message: string) : void{
        this.pageTitle = 'Product List: ' + message;
    }
}