
import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {ColorPicker} from "./color-picker/color-picker";


@Component({
    selector: 'app',
    template: `
        
        <color-picker #picker color="red" (color)="onColor($event)"></color-picker>
    
        <button (click)="picker.reset()">Reset</button>
        
    `
})
export class App {

    color:string;

    onColor(color) {
        console.log("color:", color);
    }

}

@NgModule({
    declarations: [App, ColorPicker],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule);