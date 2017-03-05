import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormService} from './form.service';

@Component({
  selector: 'app-sign-up-form',
  providers: [FormService],
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {

  @Input()
  public visible: boolean;

  public form: FormGroup;
  public formErrors: {[key: string]: string};

  public constructor(private _formService: FormService) {
    this.form = _formService.form;
    this.formErrors = _formService.formErrors;
  }

}
