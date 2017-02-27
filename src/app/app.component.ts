import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{

  public singUpForm: FormGroup;
  public logInForm: FormGroup;

  public constructor(private _fb: FormBuilder) {
    this.singUpForm = _fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(/^\w+@\w+\.\w+$/)]],
      pasword: []
    });
    this.logInForm = _fb.group({});
  }

  private nameValidator(control: FormControl): {[key: string]: boolean} {
    const value = control.value || '';
    const valid = value.match(/^[a-zA-Z]*$/);
    return valid ? null : {nospecial: true}
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
