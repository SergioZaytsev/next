import React from "react";
import { IPTagProps } from "./Ptag";
import cn from "classnames";
import style from "./Ptag.module.css";

const Ptag = ({ children, variant = "p1" }: IPTagProps) => {
  return <p className={cn(style.p)}></p>;
};

export default Ptag;
