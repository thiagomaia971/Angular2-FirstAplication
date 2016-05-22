import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'moneyPipe'
})

export class MoneyPipe implements PipeTransform{
    transform(value: number, args: string[]) : string{
        return value + ' R$';
    }
}