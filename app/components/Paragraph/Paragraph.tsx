import React from "react";
import style from "./Paragraph.module.css";
import cn from "classnames";
import { IPTagProps } from "./ParagraphProps";

const Paragraph = ({ children, variant = "small", ...props }: IPTagProps) => {
  return (
    <p
      className={cn(style.p, {
        [style.p1]: variant == "medium",
        [style.p2]: variant == "small",
        [style.p3]: variant == "big",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
