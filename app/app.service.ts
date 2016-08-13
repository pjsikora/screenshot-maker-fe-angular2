import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AppService {
    private url = 'http://localhost:8888/';
    constructor(private http: Http) { }

    getScreenshots() {
        return this.http.get(this.url+"list")
            .toPromise();
    }

    makeScreenshot(websiteUrl) {
        return this.http.get(this.url+'screenshot'+'?url='+websiteUrl)
            .toPromise();
    }

}