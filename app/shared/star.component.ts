import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'ai-star', // ai = Acme Ink, company name
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    
    ngOnChanges(): void{
        this.starWidth = this.rating * 86 /5;
    }
}