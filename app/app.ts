
import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {ColorPicker} from "./color-picker/color-picker";
import {ColorPreviewer} from "./color-previewer/color-previewer";


@Component({
    selector: 'app',
    template: `
        
        <color-picker #picker color="red" (color)="previewer.color = $event"></color-picker>
        
        <color-previewer #previewer></color-previewer>
    
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
    declarations: [App, ColorPicker, ColorPreviewer],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule);