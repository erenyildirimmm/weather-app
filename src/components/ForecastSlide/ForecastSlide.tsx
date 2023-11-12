import React from "react";

//Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Types } from "../../types/Types";

// css
import './forecastSlide.scss'
import "swiper/css";
import "swiper/css/navigation";
import { getWeatherIcon } from "../../utils/getWeatherIcon";

const ForecastSlide: React.FC<Types> = ({ weeklyWeather }) => {
  return (
    <div className="forecast-slide jumbotron">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        initialSlide={0}
      >
        {weeklyWeather ? (
          <>
            <SwiperSlide>
              <div className="slide-items">
                {Object.keys(weeklyWeather.previous).map((day) => (
                  <SwiperSlide key={day}>
                    <div className="day">{day}</div>
                    <div className="icon">
                      {getWeatherIcon(weeklyWeather.previous[day].type)}
                    </div>
                    <div className="degree">
                      {weeklyWeather.previous[day].degree}°
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-items">
                {Object.keys(weeklyWeather.current).map((day) => (
                  <SwiperSlide key={day}>
                    <div className="day">{day}</div>
                    <div className="icon">
                      {getWeatherIcon(weeklyWeather.current[day].type)}
                    </div>
                    <div className="degree">
                      {weeklyWeather.next[day].degree}°
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-items">
                {Object.keys(weeklyWeather.next).map((day) => (
                  <SwiperSlide key={day}>
                    <div className="day">{day}</div>
                    <div className="icon">
                      {getWeatherIcon(weeklyWeather.next[day].type)}
                    </div>
                    <div className="degree">
                      {weeklyWeather.next[day].degree}°
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </SwiperSlide>
          </>
        ) : (
          "bekleniyor"
        )}
      </Swiper>
    </div>
  );
};

export default ForecastSlide;
