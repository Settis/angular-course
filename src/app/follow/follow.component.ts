import {Component, OnInit, Input} from '@angular/core';
import {Place} from "../place";

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public place: Place;

}
