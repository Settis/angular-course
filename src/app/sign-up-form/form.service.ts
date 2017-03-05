import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidatorService} from '../common/form/validator.service';
import {ErrorMessagesService} from '../common/form/error-messages.service';

@Injectable()
export class FormService {

  public form: FormGroup;

  public formErrors: {[key: string]: string} = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
  };

  public constructor(private _fb: FormBuilder,
              private _validator: ValidatorService,
              private _errorMessages: ErrorMessagesService) {
    this.form = this._fb.group({
      firstName: ['', [Validators.required, _validator.nameValidator.bind(_validator), Validators.minLength(3)]],
      lastName: ['', [Validators.required, _validator.nameValidator.bind(_validator), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(/^\w+@\w+\.\w+$/)]],
      password: ['', [Validators.required, _validator.upperCaseValidator.bind(_validator),
        _validator.lowerCaseValidator.bind(_validator), _validator.digitValidator.bind(_validator),
        _validator.specialCharValidator.bind(_validator), Validators.minLength(10)]]
    });
    this.form.valueChanges.subscribe(() => this.onValueChanged());
    this.onValueChanged();
  }

  private onValueChanged(): void {
    this._errorMessages.setFormErrorMessages(this.form, this.formErrors);
  }

}
