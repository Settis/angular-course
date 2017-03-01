import { Component, ViewEncapsulation, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit, OnInit{
  ngOnInit(): void {
    this.onSignUpValueChanged();
    this.onLogInValueChanged();
  }

  public signUpForm: FormGroup;
  public logInForm: FormGroup;

  public signUpFormErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
  };

  public logInFormErrors = {
    'email': '',
    'password': '',
  };

  public constructor(private _fb: FormBuilder) {
    this.signUpForm = _fb.group({
      firstName: ['', [Validators.required, this.nameValidator, Validators.minLength(3)]],
      lastName: ['', [Validators.required, this.nameValidator, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(/^\w+@\w+\.\w+$/)]],
      password: ['', [Validators.required, this.passwordValidator, Validators.minLength(10)]]
    });
    this.signUpForm.valueChanges.subscribe(data => this.onSignUpValueChanged());
    this.logInForm = _fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+@\w+\.\w+$/)]],
      password: ['', [Validators.required]]
    });
    this.logInForm.valueChanges.subscribe(data => this.onLogInValueChanged());
  }

  private nameValidator(control: FormControl): {[key: string]: boolean} {
    const value = control.value || '';
    const valid = value.match(/^[a-zA-Z]*$/);
    return valid ? null : {nospecial: true}
  }

  private passwordValidator(control: FormControl): {[key: string]: boolean} {
    if (!control.value)
      return null;
    const result: {[key: string]: boolean} = {};
    const value = control.value;
    if (!value.match(/[A-Z]/))
      result['upper'] = true;
    if (!value.match(/[a-z]/))
      result['lower'] = true;
    if (!value.match(/\d/))
      result['digit'] = true;
    if (!value.match(/[^A-Za-z0-9]/))
      result['special'] = true;
    return Object.keys(result).length == 0 ? null : result;
  }

  private validationMessages = {
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

  private onSignUpValueChanged(): void {
    this.setErrorMessages(this.signUpForm, this.signUpFormErrors);
  }

  private onLogInValueChanged(): void {
    this.setErrorMessages(this.logInForm, this.logInFormErrors);
  }

  private setErrorMessages(form:FormGroup, errors): void {
    if (!form) { return; }
    for (const field in errors) {
      errors[field] = '';
      const control = form.get(field);
      if (control && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          if (control.errors[key]) {
            errors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }

  ngAfterViewInit(): void {
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {

      var $this = $(this),
        label = $this.prev('label');

      if (e.type === 'keyup') {
        if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
      } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
          label.removeClass('active highlight');
        } else {
          label.removeClass('highlight');
        }
      } else if (e.type === 'focus') {

        if( $this.val() === '' ) {
          label.removeClass('highlight');
        }
        else if( $this.val() !== '' ) {
          label.addClass('highlight');
        }
      }

    });

    $('.tab a').on('click', function (e) {

      e.preventDefault();

      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');

      let target = $(this).attr('href');

      $('.tab-content > div').not(target).hide();

      $(target).fadeIn(600);

    });
  }



}
