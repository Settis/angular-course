import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ValidatorService } from './common/validator.service';

/* tslint:disable */
declare var $:any;
/* tslint:enable */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {

  public signUpForm: FormGroup;
  public logInForm: FormGroup;

  public signUpFormErrors: {[key: string]: string} = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
  };
  public logInFormErrors: {[key: string]: string} = {
    'email': '',
    'password': '',
  };

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

  public constructor(private _fb: FormBuilder,
      private _validator: ValidatorService) {
  }

  public ngOnInit(): void {
    this.signUpForm = this._fb.group({
      firstName: ['', [Validators.required, this.nameValidator.bind(this), Validators.minLength(3)]],
      lastName: ['', [Validators.required, this.nameValidator.bind(this), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(/^\w+@\w+\.\w+$/)]],
      password: ['', [Validators.required, this.upperCaseValidator.bind(this), this.lowerCaseValidator.bind(this),
        this.digitValidator.bind(this), this.specialCharValidator.bind(this), Validators.minLength(10)]]
    });
    this.signUpForm.valueChanges.subscribe(() => this.onSignUpValueChanged());
    this.logInForm = this._fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+@\w+\.\w+$/)]],
      password: ['', [Validators.required]]
    });
    this.logInForm.valueChanges.subscribe(() => this.onLogInValueChanged());
    this.onSignUpValueChanged();
    this.onLogInValueChanged();
  }

  private nameValidator(control: FormControl): {[key: string]: boolean} {
    return this._validator.namedPatternValidator(control, /^[a-zA-Z]*$/, 'nospecial');
  }

  private upperCaseValidator(control: FormControl): {[key: string]: boolean} {
    return this._validator.namedPatternValidator(control, /[A-Z]/, 'upper');
  }

  private lowerCaseValidator(control: FormControl): {[key: string]: boolean} {
    return this._validator.namedPatternValidator(control, /[a-z]/, 'lower');
  }

  private digitValidator(control: FormControl): {[key: string]: boolean} {
    return this._validator.namedPatternValidator(control, /\d/, 'digit');
  }

  private specialCharValidator(control: FormControl): {[key: string]: boolean} {
    return this._validator.namedPatternValidator(control, /[^A-Za-z0-9]/, 'special');
  }

  private onSignUpValueChanged(): void {
    this.setFormErrorMessages(this.signUpForm, this.signUpFormErrors);
  }

  private onLogInValueChanged(): void {
    this.setFormErrorMessages(this.logInForm, this.logInFormErrors);
  }

  private setFormErrorMessages(form: FormGroup, errors: {[key: string]: string}): void {
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

  private getControlErrorMessages(control: AbstractControl, messages: {[key: string]: string}): string {
    let errorMessages: string = '';
    for (const key in control.errors) {
      if (control.errors[key]) {
        errorMessages += messages[key] + ' ';
      }
    }
    return errorMessages;
  }

  public ngAfterViewInit(): void {
    /* tslint:disable */
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
    /* tslint:enable */
  }



}
