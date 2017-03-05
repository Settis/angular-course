import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public currentFormName: string = 'singup';

  public setCurrentFormName(name: string): void {
    this.currentFormName = name;
  }

}
