import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButton
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  typeButton: "primary" | "ghost";
  children: ReactNode;
}
