import { ReactElement } from "react";
import { SunnyIcon, SunnyCloudyIcon, RainyIcon, SunnyRainyIcon, ThunderIcon } from "../components/Icons/Icons";

export const getWeatherIcon = (type: string): ReactElement => {
  const lowerCaseType = type.toLowerCase();

  switch (lowerCaseType) {
    case "sunny":
      return <SunnyIcon />;
    case "sunny cloudy":
      return <SunnyCloudyIcon />;
    case "rainy":
      return <RainyIcon />;
    case "sunny rainy":
      return <SunnyRainyIcon />;
    case "thunder":
      return <ThunderIcon />;
    default:
      return <SunnyIcon />;
  }
};