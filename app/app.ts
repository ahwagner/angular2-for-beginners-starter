
import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {ColorSample} from "./color-sample/color-sample";


@Component({
    selector: 'app',
    template: `
        <color-sample #colorsample></color-sample>
        <input #colorbox placeholder="Type Your Color Here" (keyup)="colorsample.background = colorbox.value">
        
    `
})
export class App {

}

@NgModule({
    declarations: [App, ColorSample],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule);