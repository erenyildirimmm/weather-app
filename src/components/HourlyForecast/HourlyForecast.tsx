import React, { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, LabelList } from "recharts";
import {
  CustomizedLabelBottom,
  CustomizedLabelTop,
} from "./ChartText.tsx/ChartText";

//img
import appLogo from "../../assets/images/app-logo.png";

//css
import "./hourlyForecast.scss";
import { ClockIcon } from "../Icons/Icons";

interface ChartData {
  hour: string;
  max: number;
}

interface HourlyForecastProps {
  forecast?: { [hour: string]: string };
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ forecast }) => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    if(forecast) {
      const formatData = (forecastData: {
        [key: string]: string;
      }): ChartData[] => {
        return Object.keys(forecastData).map((hour) => ({
          hour,
          max: Number(forecastData[hour]),
        }));
      };
  
      setChartData(formatData(forecast));
    }
  }, [forecast]);

  return (
    <>
      <div className="app-logo">
        <img src={appLogo} alt="" />
      </div>
      <div className="forecast-chart jumbotron">
        <div className="title">
          <div className="icon">
            <ClockIcon />
          </div>
          <h5>Hourly Forecast</h5>
        </div>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart
            data={chartData}
            margin={{ top: 30, left: 25, bottom: 20, right: 25 }}
          >
            <Line
              type="monotone"
              dataKey="max"
              stroke="#fff"
              strokeWidth={2}
              dot={false}
            >
              <LabelList
                dataKey="max"
                position="top"
                content={<CustomizedLabelTop />}
              />
              <LabelList
                dataKey="hour"
                position="bottom"
                content={<CustomizedLabelBottom />}
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default HourlyForecast;
