
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

import {CollapseOnClick} from "./collapse-on-click/collapse-on-click.directive";



@Component({
    selector:'app',
    template: `
        
        <div collapse-on-click #cp="collapsible" [collapsed]="collapsed" (collapsed)="onToggle($event)"
             class="card card-strong disable-text-selection" [class.collapsed]="cp.collapsed">
           
            <i class="md-icon collapsible-indicator">arrow_drop_down</i>
           
            <div class="collapsible-section">   
                This page section is collapsible, double click it and it will collapse or expand.
            </div>
        </div>
        `
})
export class App {


    collapsed = false;
    onToggle(collapsed) {
        console.log(collapsed)
    }

}



@NgModule({
    declarations: [App, CollapseOnClick],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);