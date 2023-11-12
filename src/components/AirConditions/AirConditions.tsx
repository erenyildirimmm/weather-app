import React, { useEffect, useState } from "react";
import { ClockIcon, RainyIcon, SunnyIcon, ThermometerIcon, WindyIcon } from "../Icons/Icons";
import { Types } from "../../types/Types";

//img
import background from '../../assets/images/bg-vector.png'
//css
import "./airConditions.scss";

interface ConditionsData {
  feel: string;
  rain: string;
  wind: string;
  uvIndex: string;
};

const airConditionsStyle: React.CSSProperties = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom"
};

const AirConditions: React.FC<Types> = ({ airConditions, date }) => {
  const [hour, setHour] = useState<string>("");
  const [airConditionsData, setAirConditionsData] = useState<ConditionsData>();

  useEffect(() => {
    if (date && airConditions) {
      const currentHour: string = date.split(" : ")[1];
      const conditions: string[] = airConditions?.split("::") || [];
      const newData: ConditionsData = {
        feel: conditions[0],
        rain: conditions[1],
        wind: conditions[2],
        uvIndex: conditions[3],
      };

      setHour(currentHour);
      setAirConditionsData(newData);
    }
  }, [date, airConditions]);

  return (
    <div className="air-conditions jumbotron" style={airConditionsStyle}>
      <div className="top">
        <div className="title">
          <div className="icon">
            <ClockIcon />
          </div>
          <h5>{hour}</h5>
        </div>
        <div className="subtitle">
          <h4>AIR CONDITIONS</h4>
        </div>
      </div>
      <div className="conditions">
        <div className="item-content">
          {airConditionsData && (
            <>
              <div className="item">
                <div className="icon">
                  <ThermometerIcon />
                </div>
                <div className="text">
                  <p>Rel Feel</p>
                  <span>{airConditionsData.feel}°</span>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <WindyIcon />
                </div>
                <div className="text">
                  <p>Wind</p>
                  <span>{airConditionsData.wind} km/hr</span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="item-content bot">
        {airConditionsData && (
            <>
              <div className="item">
                <div className="icon">
                  <RainyIcon />
                </div>
                <div className="text">
                  <p>Change of Rain</p>
                  <span>{airConditionsData.rain}%</span>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <SunnyIcon />
                </div>
                <div className="text">
                  <p>UV Index</p>
                  <span>{airConditionsData.uvIndex}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
