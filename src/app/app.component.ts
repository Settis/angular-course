import {Component, OnInit} from '@angular/core';

class Place implements IPlace{
  name: string;
  country: string;
  city: string;
  telephone: number;
  temperature: number;
  waterTemperature: number;
  weather: string;
  followers: number;
  following: number;
  private imagePrefix: string;
  private static imageUrlPath: string = 'assets/images/';

  public constructor(name: string, country: string, city: string, telephone: number, temperature: number, waterTemperature: number, weather: string, followers: number, following: number, imagePrefix: string) {
    this.name = name;
    this.country = country;
    this.city = city;
    this.telephone = telephone;
    this.temperature = temperature;
    this.waterTemperature = waterTemperature;
    this.weather = weather;
    this.followers = followers;
    this.following = following;
    this.imagePrefix = imagePrefix;
  }

  public getMainImage():string {
    return Place.imageUrlPath + this.imagePrefix + 'main.jpg'
  }

  public getMainMinImage():string {
    return Place.imageUrlPath + this.imagePrefix + 'mainMin.jpg'
  }

  public getSecondImage():string {
    return Place.imageUrlPath + this.imagePrefix + 'second.jpg'
  }

  public getSecondMinImage():string {
    return Place.imageUrlPath + this.imagePrefix + 'secondMin.jpg'
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public places: [IPlace] = [
      new Place('Hotel', 'Puerto Rico', 'San Juan', 123321123, 33, 21, 'sunny', 45, 3445, '1'),
      new Place('SPA', 'French Polyneisa', 'Bora Bora', 123555123, 30, 25, 'windy', 12345, 405, '2'),
      new Place('Another hotel', 'Netherlands Antilles', 'Curacao', 127777777, 27, 16, 'windy', 12, 100, '3'),
    ];

  public currentPlace: IPlace;

  ngOnInit() {
    this.currentPlace = this.places[0];
  }

  public changeCurrentPlace(foo:IPlace):void {
    this.currentPlace = foo;
  }

}
