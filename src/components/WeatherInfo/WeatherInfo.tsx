import React, { useEffect, useState } from "react";

//scss
import "./weatherInfo.scss";

//icons
import { LocationIcon } from "../Icons/Icons";
import { Types } from "../../types/Types";
import { getWeatherIcon } from "../../utils/getWeatherIcon";

type DateInfo = {
  weekday: string;
  month: string;
  day: string;
  year: string;
};

const WeatherInfo: React.FC<Types> = ({ city, type, degree, date }) => {
  const [newDate, setNewDate] = useState<DateInfo | undefined>();

  // Date verisini istediğimiz formata dönüştürüyor
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    if (date && !isNaN(Date.parse(date))) {
      const lastDate = new Date(date);
      const formattedDate = dateFormat.formatToParts(lastDate);

      const newDateInfo: DateInfo = formattedDate.reduce(
        (acc, part) => {
          if (part.type === "weekday") acc.weekday = part.value;
          if (part.type === "month") acc.month = part.value;
          if (part.type === "day") acc.day = part.value;
          if (part.type === "year") acc.year = part.value;
          return acc;
        },
        { weekday: "", month: "", day: "", year: "" }
      );

      setNewDate(newDateInfo);
    }
  }, [date]);

  return (
    <div className="weather-info jumbotron">
      <div className="location">
        <div className="city">
          <div className="_icon">
            <LocationIcon />
          </div>
          <span>{city}</span>
        </div>
        <div className="status">{type}</div>
        <div className="degree">{degree}°C</div>
      </div>
      {type && <div className="icon">{getWeatherIcon(type)}</div>}
      <div className="date">
        <span>{newDate?.weekday}</span>
        <span>|</span>
        <span></span>
        <span>
          {newDate?.day} {newDate?.month} {newDate?.year}
        </span>
      </div>
    </div>
  );
};

export default WeatherInfo;
