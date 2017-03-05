import { Injectable } from '@angular/core';
import {ErrorMessagesService} from '../common/form/error-messages.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class FormService {

  public form: FormGroup;
  public formErrors: {[key: string]: string} = {
    'email': '',
    'password': '',
  };

  public constructor(private _fb: FormBuilder,
              private _errorMessages: ErrorMessagesService) {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+@\w+\.\w+$/)]],
      password: ['', [Validators.required]]
    });
    this.form.valueChanges.subscribe(() => this.onValueChanged());
    this.onValueChanged();
  }

  private onValueChanged(): void {
    this._errorMessages.setFormErrorMessages(this.form, this.formErrors);
  }

}
