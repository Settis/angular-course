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

}
