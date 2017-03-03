import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ValidatorService } from './common/validator.service';
import { PrettyInputComponent } from './pretty-input/pretty-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PrettyInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
