import {Component, OnInit, Input} from '@angular/core';
import {Place} from "../place";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public place: Place;

}
