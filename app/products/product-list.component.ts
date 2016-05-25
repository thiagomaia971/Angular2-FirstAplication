import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { MoneyPipe } from '../shared/money-pipe';
import { StarComponent } from '../shared/star.component'
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe, MoneyPipe],
    directives: [StarComponent]
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    listFilter: string = ''; 
     
    products: IProduct[];
    
    constructor(private _productService: ProductService){
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void{
        console.log('In OnInit');
        this.products = this._productService.getProducts();
    }
    
    onRatingClicked(message: string) : void{
        this.pageTitle = 'Product List: ' + message;
    }
}