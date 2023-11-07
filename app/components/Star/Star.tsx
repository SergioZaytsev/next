"use client";

import React, { ReactNode, useEffect, useState } from "react";
import cn from "classnames";
import StarIcon from "./Vector.svg";
import style from "./Star.module.css";
import { Span } from "next/dist/trace";

const Star = ({ rating, isCorrect, setRating }: IStarProps) => {
  const [isArray, setisArray] = useState<JSX.Element[]>(new Array(5).fill(<StarIcon />));

  useEffect(() => {
    mutableArray(rating);
  }, [rating]);

  function mouseOver(i: number) {
    if (!isCorrect) return;
    mutableArray(i);
  }

  function mouseOut(i: number) {
    if (!isCorrect) return;
    mutableArray(i);
  }

  function clickRating(r: number) {
    if (!isCorrect || !setRating) return;

    setRating(r);
  }

  function mutableArray(r: number) {
    const newArr = isArray.map((_, i) => {
      return (
        <span
          onMouseEnter={() => {
            mouseOver(i + 1);
          }}
          onMouseLeave={() => mouseOut(rating)}
          onClick={() => clickRating(i + 1)}
          onKeyDown={(event) => {
            console.log(event.key);
            event.key == "Enter" && clickRating(i + 1);
          }}
          className={cn(style.star, {
            [style.svg]: i < r,
            [style.correct]: isCorrect,
          })}
        >
          <StarIcon tabIndex={isCorrect ? 0 : -1} />
        </span>
      );
    });

    setisArray(newArr);
  }

  return (
    <div>
      {isArray.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </div>
  );
};

export default Star;
