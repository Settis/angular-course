import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ValidatorService } from './common/form/validator.service';
import { ErrorMessagesService } from './common/form/error-messages.service';
import { PrettyInputComponent } from './pretty-input/pretty-input.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PrettyInputComponent,
    SignUpFormComponent,
    LogInFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ValidatorService,
    ErrorMessagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
