import React from "react";
import logo from "../../assets/images/logo.png";

//scss
import "./menu.scss";
import {
  CitiesIcon,
  ExploreIcon,
  SettingIcon,
  SunnyRainyIcon,
} from "../Icons/Icons";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#">
            <div className="icon _weather">
              <SunnyRainyIcon />
            </div>
            weather
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <ExploreIcon />
            </div>
            explore
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <CitiesIcon />
            </div>
            cities
          </a>
        </li>
        <li>
          <a href="#">
            <div className="icon">
              <SettingIcon />
            </div>
            setting
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
