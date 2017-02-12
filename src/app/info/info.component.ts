import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  @Input()
  public place: IPlace;

  @Output()
  public clickOnIt: EventEmitter<IPlace> = new EventEmitter();

  public clickOnWhole(): void {
    this.clickOnIt.next(this.place);
  }

}
