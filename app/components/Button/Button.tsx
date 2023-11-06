import React from "react";
import { IButton } from "./ButtonProps";
import cn from "classnames";
import styles from "./Button.module.css";

const Button = ({ children, typeButton, className, ...props }: IButton) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: typeButton == "primary",
        [styles.ghost]: typeButton == "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
