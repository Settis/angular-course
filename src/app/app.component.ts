import {Component, OnInit} from '@angular/core';
import {Place} from '../models/place';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public places: IPlace[] = [
      new Place('Hotel', 'Puerto Rico', 'San Juan', 123321123, 33, 21, 'sunny', 45, 3445, '1'),
      new Place('SPA', 'Polyneisa', 'Bora Bora', 123555123, 30, 25, 'windy', 12345, 405, '2'),
      new Place('Another hotel', 'Netherlands', 'Curacao', 127777777, 27, 16, 'windy', 12, 100, '3'),
    ];

  public currentPlace: IPlace;

  public countryFilter: string = null;

  public ngOnInit(): void {
    this.currentPlace = this.places[0];
  }

  public changeCurrentPlace(place: IPlace): void {
    this.currentPlace = place;
  }

  public changeCountryFilter(country: string): void {
    this.countryFilter = country;
  }

  public checkCountryFilter(country: string): boolean {
    return this.countryFilter === country;
  }

}
