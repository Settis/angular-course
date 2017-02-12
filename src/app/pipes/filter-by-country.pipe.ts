import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCountry'
})
export class FilterByCountryPipe implements PipeTransform {

  public transform(input: IPlace[], country: string): IPlace[] {
    if (!country)
      return input;
    return input.filter((place: IPlace): boolean => place.country === country);
  }

}
