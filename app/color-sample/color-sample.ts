import {Component, Input} from "@angular/core";
@Component({
    selector: 'color-sample',
    template: `
    
        <div [ngStyle]="{'background':background}" class="color-sample">
        </div>
        
    `
})
export class ColorSample {

    @Input()
    background:string;

}