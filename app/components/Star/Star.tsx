"use client";

import React from "react";
import cn from "classnames";
import StarIcon from "./Vector.svg";
import style from "./Star.module.css";

const Star = ({ rating, isCorrect }: IStarProps) => {
  return (
    <div>
      <img src="./Vector.svg" alt="" />
      <StarIcon className={style.svg} />
    </div>
  );
};

export default Star;
