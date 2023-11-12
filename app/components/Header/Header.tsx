import React from "react";
import { IHeaderProps } from "./HeaderProps";

const Header = ({ children, ...props }: IHeaderProps) => {
  return (
    <div {...props}>
      Header
      {children}
    </div>
  );
};

export default Header;
