import {Routes, RouterModule} from '@angular/router';
import {MakeScreenshotComponent} from './makescreenshot.component';
import {ListComponent} from './list.component';

const appRoutes:Routes = [
    {
        path: 'makescreenshot',
        component: MakeScreenshotComponent
    },
    {
        path: 'list',
        component: ListComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
