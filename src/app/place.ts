export class Place {
  public name: string;
  public country: string;
  public city: string;
  public telephone: number;
  public temperature: number;
  public waterTemperature: number;
  public weather: string;
  public followers: number;
  public following:number;
  private imagePrefix: string;
  private static imageUrlPath: string = 'assets/images/';

  public constructor(name: string, country: string, city: string, telephone: number, temperature: number, waterTemperature: number, weather: string, followers: number, following: number, imagePrefix: string) {
    this.name = name;
    this.country = country;
    this.city = city;
    this.telephone = telephone;
    this.temperature = temperature;
    this.waterTemperature = waterTemperature;
    this.weather = weather;
    this.followers = followers;
    this.following = following;
    this.imagePrefix = imagePrefix;
  }

  public getMainImage():string {
    return Place.imageUrlPath + this.imagePrefix + 'main.jpg'
  }

  public getMainMinImage():string {
    return Place.imageUrlPath + this.imagePrefix + 'mainMin.jpg'
  }

  public getSecondImage():string {
    return Place.imageUrlPath + this.imagePrefix + 'second.jpg'
  }

  public getSecondMinImage():string {
    return Place.imageUrlPath + this.imagePrefix + 'secondMin.jpg'
  }
}
