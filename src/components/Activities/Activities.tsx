import React from "react";
import { LikeIcon } from "../Icons/Icons";

// images
import activities1 from "../../assets/images/activities-1.png";
import activities2 from "../../assets/images/activities-2.png";
import activities3 from "../../assets/images/activities-3.png";
import activities4 from "../../assets/images/activities-4.png";

//scss
import "./activities.scss";

const Activities: React.FC = () => {
  return (
    <div className="activities jumbotron ">
      <div className="title">
        <LikeIcon />
        <span>Activities in your area</span>
      </div>
      <div className="images">
        <div className="grid-12">
          <div className="activite">
            <img src={activities1} alt="" />
          </div>
          <div className="activite">
            <img src={activities2} alt="" />
          </div>
          <div className="activite">
            <img src={activities3} alt="" />
          </div>
          <div className="activite">
            <img src={activities4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
