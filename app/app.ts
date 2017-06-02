
import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {SearchBox} from "./search-box/search-box.component";

@Component({
    selector: 'app',
    template: `<search-box></search-box>`
})
export class App {

}

@NgModule({
    declarations: [App, SearchBox],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule{

}

platformBrowserDynamic().bootstrapModule(AppModule);