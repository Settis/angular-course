import { Injectable } from '@angular/core';
import {FormGroup, AbstractControl} from '@angular/forms';

@Injectable()
export class ErrorMessagesService {

  private validationMessages: {[key: string]: {[key: string]: string}} = {
    'firstName': {
      'required': 'First name is required.',
      'minlength': 'First name must be at least 3 characters long.',
      'nospecial': 'First name must contain only latin letters.',
    },
    'lastName': {
      'required': 'Last name is required.',
      'minlength': 'Last name must be at least 3 characters long.',
      'nospecial': 'Last name must contain only latin letters.',
    },
    'email': {
      'required': 'Email is required.',
      'pattern': 'Email must be in a valid format.',
    },
    'password': {
      'required': 'Password is required.',
      'upper': 'Password must contain upper case letters.',
      'lower': 'Password must contain lower case letters.',
      'digit': 'Password must contain digits.',
      'special': 'Password must contain special characters.',
      'minlength': 'Password must be at least 10 characters long.',
    },
  };

  public setFormErrorMessages(form: FormGroup, errors: {[key: string]: string}): void {
    if (!form) { return; }
    for (const field in errors) {
      const control: AbstractControl = form.get(field);
      if (control && !control.valid) {
        errors[field] = this.getControlErrorMessages(control, this.validationMessages[field]);
      } else {
        errors[field] = '';
      }
    }
  }

  public getControlErrorMessages(control: AbstractControl, messages: {[key: string]: string}): string {
    let errorMessages: string = '';
    for (const key in control.errors) {
      if (control.errors[key]) {
        errorMessages += messages[key] + ' ';
      }
    }
    return errorMessages;
  }

}
