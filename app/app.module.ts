import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}     from '@angular/http';

import {AppComponent}  from './app.component';

import {routing}        from './app.routing';


@NgModule({
    imports: [BrowserModule, routing, HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
