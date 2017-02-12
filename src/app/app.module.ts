import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { FollowComponent } from './follow/follow.component';
import { InfoComponent } from './info/info.component';
import { FilterByCountryPipe } from './pipes/filter-by-country.pipe';
import { GetDistinctCountriesPipe } from './pipes/get-distinct-countries.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FollowComponent,
    InfoComponent,
    FilterByCountryPipe,
    GetDistinctCountriesPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
