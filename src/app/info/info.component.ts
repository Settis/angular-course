import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Place} from "../place";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public place: Place;

  @Output()
  public clickOnIt: EventEmitter<Place> = new EventEmitter();

  public clickOnWhole(){
    this.clickOnIt.next(this.place);
  }

}
