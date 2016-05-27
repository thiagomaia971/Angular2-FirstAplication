import { Injectable } from '@angular/core'
import { IProduct } from './product'

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable() 
export class ProductService {
    private _productUrl = 'api/products/products.json'; // O caminho da API
    
    constructor(private _http: Http){ // Inject do HTTP_PROVIDERS
        
    }
    
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl) // Recebendo os dados da UrlPassada
                .map((response: Response) => <IProduct[]>response.json()) // Transaformando em Json
                //.do(data => console.log('All: ' + JSON.stringify(data))) // Notificando o Json no console
                .catch(this.handleError); // Caso tenha erro, chame o handleError!
    }
    
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
       
}