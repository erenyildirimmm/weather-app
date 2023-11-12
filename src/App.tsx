import React, { useEffect, useState } from "react";
import backgroundImage from "./assets/images/background.jpg";

// components
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Activities from "./components/Activities/Activities";
import ForecastSlide from "./components/ForecastSlide/ForecastSlide";
import Menu from "./components/Menu/Menu";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import AirConditions from "./components/AirConditions/AirConditions";

// types
import { Types } from "./types/Types";

//loading spinner
import { Hourglass } from "react-loader-spinner";

//css
import "./scss/app.scss";
import { getData } from "./api/api";
import { CloseIcon, MenuIcon } from "./components/Icons/Icons";

const appStyle: React.CSSProperties = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const App: React.FC = () => {
  const [data, setData] = useState<Types | null>(null);
  const [apiUrl, setApiUrl] = useState<string>("/data/data.json");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await getData(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error("Veri alınamadı: ", error);
      }
    };

    getWeatherData();
  }, [apiUrl]);

  const openMenu = () => {
    setShowMenu(!showMenu);
    showMenu === false
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  return (
    <div className="app" style={appStyle}>
      {data ? (
        <div className="container">
          <div className="menu-button">
            <button onClick={openMenu}>
              {showMenu ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          {showMenu && (
            <>
              <div className="mobile-menu-overlay" />
              <div className="mobile-menu jumbotron">
                <Menu />
              </div>
            </>
          )}
          <div className="grid-12 app-content">
            <div className="app-weather-info">
              <WeatherInfo
                city={data.city}
                type={data.type}
                degree={data.degree}
                date={data.date}
              />
            </div>
            <div className="app-forecast">
              <HourlyForecast forecast={data.forecast} />
            </div>

            <div className="jumbotron app-destkop-menu">
              <Menu />
            </div>
            <div className="twin">
              <Activities />
              <ForecastSlide weeklyWeather={data.weeklyWeather} />
            </div>
            <div className="app-conditions">
              <AirConditions
                airConditions={data.airConditions}
                date={data.date}
              />
            </div>
          </div>
        </div>
      ) : (
        <Hourglass
          visible={true}
          height="150"
          width="150"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      )}
    </div>
  );
};

export default App;
