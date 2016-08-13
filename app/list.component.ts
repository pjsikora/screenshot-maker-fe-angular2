import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
    template: `<h3>List component</h3>
        <ul>
            <li *ngFor="let screenshot of screenshots">
                {{ screenshot }}
            </li>
        </ul>
    `,
    providers: [AppService]
})

export class ListComponent {
    screenshots:Array =  ['uno', 'due'];

    constructor(appService: AppService) {
        appService.getScreenshots()
            .then(  (response) => {
                console.log(JSON.parse(response._body).files);
                this.screenshots = JSON.parse(response._body).files;
            });
    }
}
