import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormService} from './form.service';

@Component({
  selector: 'app-log-in-form',
  providers: [FormService],
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent {

  @Input()
  public visible: boolean;

  public form: FormGroup;
  public formErrors: {[key: string]: string};

  public constructor(private _formService: FormService) {
    this.form = _formService.form;
    this.formErrors = _formService.formErrors;
  }

}
