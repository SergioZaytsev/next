import React from "react";
import style from "./Tag.module.css";
import cn from "classnames";
import { ITagProps } from "./TagProps";

const Tag = ({ children, size = "l", color = "primary", className, href, ...props }: ITagProps) => {
  return (
    <div
      className={cn(className, style.tag, {
        [style.primary]: color == "primary",
        [style.ghost]: color == "ghost",
        [style.green]: color == "green",
        [style.red]: color == "red",

        [style.l]: size == "l",
        [style.m]: size == "m",
      })}
      {...props}
    >
      {href ? <a href={href}> {children}</a> : <> {children}</>}
    </div>
  );
};

export default Tag;
