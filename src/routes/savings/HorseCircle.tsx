import React from "react";
import "./HorseCircle.css";

import babyHorse from "./assets/baby-horse.png";
import teenHorse from "./assets/teen-horse.png";
import adultHorse from "./assets/adult-horse.png";

interface Props {
  moneySaved: number;
}

const HorseCircle: React.FC<Props> = ({ moneySaved }) => {
  let horseImage = babyHorse;

  if (moneySaved > 1000 && moneySaved <= 5000) {
    horseImage = teenHorse;
  } else if (moneySaved > 5000) {
    horseImage = adultHorse;
  }

  return (
    <div className="circle">
      <img src={horseImage} alt="Horse" />
    </div>
  );
};

export default HorseCircle;
