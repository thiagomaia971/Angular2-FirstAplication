import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform{
    
    transform(value: IProduct[], args: string[]): IProduct[] {
        
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null; // se tiver algum argumento, 
                                                                           // coloca em lowerCase, se não,
                                                                           // retorna null
        return filter ? value.filter((product : IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) == 0) : value;
    }
}