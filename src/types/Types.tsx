export type DayWeather = {
  type: string;
  degree: string;
};

export type WeeklyWeather = {
  [day: string]: DayWeather;
};

export type Types = {
  city?: string;
  type?: string;
  degree?: number;
  date?: string;
  airConditions?: string | undefined;
  forecast?: { [hour: string]: string };
  weeklyWeather?: {
    previous: WeeklyWeather;
    current: WeeklyWeather;
    next: WeeklyWeather;
  }   | undefined;
};