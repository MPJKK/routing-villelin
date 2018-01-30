import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
    reitit: any;

    lat: number = 51.678418;
    lng: number = 7.809007;

    constructor(private digitransit: DigitransitService) {
    }

    ngOnInit() {
        this.digitransit.getRoutes(this.digitransit.busstop).subscribe((response) => {
            console.log(response.data['stops']);
            this.reitit = response.data['stops'];
        });
    }

    setRoute(newlon: number, newlat: number) {
        console.log(`${newlat}, ${newlon}`);
        this.lat = newlat;
        this.lng = newlon;
    }

}
