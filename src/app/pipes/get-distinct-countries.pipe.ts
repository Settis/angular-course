import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDistinctCountries'
})
export class GetDistinctCountriesPipe implements PipeTransform {

  public transform(input: IPlace[]): string[] {
    const set: Set<string> = new Set();
    input.forEach((place: IPlace): Set<string> => set.add(place.country));
    const countries: string[] = [];
    set.forEach((value: string, value2: string, thisSet: Set<string>): number => countries.push(value));
    return countries;
  }

}
