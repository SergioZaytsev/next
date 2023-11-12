import React from "react";
import { IFooterProps } from "./Footer";
import style from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

const FooterM = ({ className, ...props }: IFooterProps) => {
  return (
    <footer className={cn(className, style.footer)} {...props}>
      <span>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</span>
      <a href="">Пользовательское соглашение</a>
      <a href="">Политика конфиденциальности</a>
    </footer>
  );
};

export default FooterM;
