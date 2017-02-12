import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCountry'
})
export class FilterByCountryPipe implements PipeTransform {

  transform(input: IPlace[], country: string): IPlace[] {
    if (!country)
      return input;
    return input.filter(place => place.country==country);
  }

}
