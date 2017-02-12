interface IPlace {
  name: string;
  country: string;
  city: string;
  telephone: number;
  temperature: number;
  waterTemperature: number;
  weather: string;
  followers: number;
  following: number;

  getMainImage(): string;
  getMainMinImage(): string;
  getSecondImage(): string;
  getSecondMinImage(): string;
}
