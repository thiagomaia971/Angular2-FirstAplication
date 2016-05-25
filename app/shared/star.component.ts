import { Component, OnChanges, 
    Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star', // ai = Acme Ink, company name
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    
    @Output() ratingClicked: EventEmitter<string> = 
            new EventEmitter<string>();
    
    ngOnChanges(): void{
        this.starWidth = this.rating * 100 /5;
    }
    
    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
    
}