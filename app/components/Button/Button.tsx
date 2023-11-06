"use client";

import React, { useEffect, useRef, useState } from "react";
import { IButton } from "./ButtonProps";
import cn from "classnames";
import styles from "./Button.module.css";

const Button = ({ children, typeButton, className, ...props }: IButton) => {
  const [pressed, setPressed] = React.useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const [coordX, setCoordX] = useState<any>(0);
  const [coordY, setCoordY] = useState<any>(0);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.top = `${coordY}px`;
      buttonRef.current.style.left = `${coordX}px`;
    }

    if (pressed) {
      setTimeout(() => {
        setPressed(false);
        buttonRef.current = null;
      }, 1000);
    }
  }, [pressed]);

  function onPressed(event: React.MouseEvent<HTMLSpanElement>) {
    setCoordX(event.nativeEvent.offsetX);
    setCoordY(event.nativeEvent.offsetY);
    setPressed(true);
  }

  return (
    <>
      <button
        className={cn(styles.button, className, {
          [styles.primary]: typeButton == "primary",
          [styles.ghost]: typeButton == "ghost",
        })}
        {...props}
      >
        <span className={styles.container} onClick={onPressed}>
          {pressed && <div className={styles.circle} ref={buttonRef}></div>}
        </span>
        <span>{children}</span>
      </button>
    </>
  );
};

export default Button;
