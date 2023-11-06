import { ReactNode } from "react";

export interface IPTagProps extends React.HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  variant: "p1" | "p2" | "p3";
}
