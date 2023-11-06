import { ReactNode } from "react";

export interface IPTagProps extends React.HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  variant?: "small" | "medium" | "big" | "test";
}
