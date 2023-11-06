import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "l" | "m";
  color?: "green" | "ghost" | "primary" | "red";
  children: ReactNode;
  href?: string;
}
