import {Component, OnInit} from '@angular/core';
import { Place } from './place'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public puertoRico: Place = new Place('Hotel', 'Puerto Rico', 'San Juan', 123321123, 33, 21, 'sunny', 45, 3445, '1');

  public frenchPolynesia: Place = new Place('SPA', 'French Polyneisa', 'Bora Bora', 123555123, 30, 25, 'windy', 12345, 405, '2');

  public netherlands: Place = new Place('Another hotel', 'Netherlands Antilles', 'Curacao', 127777777, 27, 16, 'windy', 12, 100, '3');

  public place: Place;

  ngOnInit() {
    this.place = this.puertoRico;
  }

}
