export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface Detail {
  id: number;
  main: string;
  description: string;
}
export interface Forecast {
  name: string;
  main: Main;
  weather: Detail[];
}


