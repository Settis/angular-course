import {Component, OnInit} from '@angular/core';
import { Place } from './place'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public places: Array<Place> = [{
    name: 'Hotel',
    mainImage: 'assets/images/1main.jpg',
    mainImageMin: 'assets/images/1mainMin.jpg',
    secondImage: 'assets/images/1second.jpg',
    secondImageMin: 'assets/images/1secondMin.jpg',
    country: 'Puerto Rico',
    city: 'San Juan',
    telephone: 123321123,
    temperature: 33,
    waterTemperature: 21,
    weather: 'sunny',
    followers: 45,
    following: 3445
  }, {
    name: 'SPA',
    mainImage: 'assets/images/2main.jpg',
    mainImageMin: 'assets/images/2mainMin.jpg',
    secondImage: 'assets/images/2second.jpg',
    secondImageMin: 'assets/images/2secondMin.jpg',
    country: 'French Polyneisa',
    city: 'Bora Bora',
    telephone: 123555123,
    temperature: 30,
    waterTemperature: 25,
    weather: 'windy',
    followers: 12345,
    following: 405
  }, {
    name: 'Another hotel',
    mainImage: 'assets/images/3main.jpg',
    mainImageMin: 'assets/images/3mainMin.jpg',
    secondImage: 'assets/images/3second.jpg',
    secondImageMin: 'assets/images/3secondMin.jpg',
    country: 'Netherlands Antilles',
    city: 'Curacao',
    telephone: 127777777,
    temperature: 27,
    waterTemperature: 16,
    weather: 'windy',
    followers: 12,
    following: 100
  }];

  public place: Place;

  ngOnInit() {
    this.place = this.places[0]
  }

}
