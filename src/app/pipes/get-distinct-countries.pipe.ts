import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDistinctCountries'
})
export class GetDistinctCountriesPipe implements PipeTransform {

  public transform(input: IPlace[]): string[] {
    let set = new Set();
    input.forEach(place => set.add(place.country));
    let countries: string[] = [];
    set.forEach((value, value2, thisSet) => countries.push(value));
    return countries;
  }

}
