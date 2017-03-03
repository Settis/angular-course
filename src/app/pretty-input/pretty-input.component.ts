import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-pretty-input',
  templateUrl: './pretty-input.component.html',
  styleUrls: ['./pretty-input.component.css']
})
export class PrettyInputComponent implements OnInit {

  @Input()
  public label: string;

  @Input()
  public control: AbstractControl;

  @Input()
  public errorMgs: string;

  @Input()
  public type: string = 'text';

  public highlight: boolean = false;
  public active: boolean = false;

  public ngOnInit(): void {
    this.control.valueChanges.subscribe(() => this.onChange());
  }

  public onChange(): void {
    const hasText: boolean = ((this.control.value || '') !== '');
    this.active = hasText;
    this.highlight = hasText;
  }

  public onFocus(): void {
    this.highlight = (this.control.value || '') !== '';
  }

  public onBlur(): void {
    this.highlight = false;
  }

}
