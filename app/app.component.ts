import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Screenshot app</h1>
            <a routerLink="/list">List</a>
            <a routerLink="/makescreenshot">Make screenshot</a>
            <router-outlet></router-outlet>
    `
})
export class AppComponent { }
