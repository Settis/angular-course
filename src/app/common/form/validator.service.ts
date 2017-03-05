import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable()
export class ValidatorService {

  public namedPatternValidator(control: FormControl, matcher: RegExp, name: string): {[key: string]: boolean} {
    if (!control.value)
      return null;
    const value: string = control.value || '';
    const valid: RegExpMatchArray = value.match(matcher);
    const result: {[key: string]: boolean} = {};
    result[name] = true;
    return valid ? null : result;
  }

  public nameValidator(control: FormControl): {[key: string]: boolean} {
    return this.namedPatternValidator(control, /^[a-zA-Z]*$/, 'nospecial');
  }

  public upperCaseValidator(control: FormControl): {[key: string]: boolean} {
    return this.namedPatternValidator(control, /[A-Z]/, 'upper');
  }

  public lowerCaseValidator(control: FormControl): {[key: string]: boolean} {
    return this.namedPatternValidator(control, /[a-z]/, 'lower');
  }

  public digitValidator(control: FormControl): {[key: string]: boolean} {
    return this.namedPatternValidator(control, /\d/, 'digit');
  }

  public specialCharValidator(control: FormControl): {[key: string]: boolean} {
    return this.namedPatternValidator(control, /[^A-Za-z0-9]/, 'special');
  }

}
