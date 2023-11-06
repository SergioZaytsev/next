import React from "react";
import style from "./Paragraph.module.css";
import cn from "classnames";
import { IPTagProps } from "./ParagraphProps";

const Paragraph = ({ children, variant = "p1" }: IPTagProps) => {
  return <p className={cn(style.p)}></p>;
};

export default Paragraph;
