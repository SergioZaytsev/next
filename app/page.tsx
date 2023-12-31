"use client";

import { useState } from "react";
import Button from "./components/Button/Button";
import Htag from "./components/Htag/Htag";
import Paragraph from "./components/Paragraph/Paragraph";
import Star from "./components/Star/Star";
import Tag from "./components/Tag/Tag";

export default function Home() {
  const [rat, setRat] = useState<number>(3);

  return (
    <>
      <Htag tag="h1">заголовок</Htag>
      <Button typeButton="ghost">Узнать подробнее</Button>
      <div style={{ marginBottom: 30 }}></div>
      <Button typeButton="primary">Узнать подробнее</Button>

      <Paragraph variant="small">
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в
        изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в
        программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую
        большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме
      </Paragraph>

      <Paragraph variant="medium">
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в
        изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в
      </Paragraph>

      <Paragraph variant="big">
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в
        изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в
      </Paragraph>

      <Tag href="www.ya.ru" color="green">
        -10 000
      </Tag>
      <Tag href="www.ya.ru" size="m" color="primary">
        Работа в Photoshop
      </Tag>

      <Tag href="www.ya.ru" size="l" color="red">
        hh.ru
      </Tag>
      <Tag href="www.ya.ru" color="ghost">
        Photoshop
      </Tag>

      <Star rating={rat} isCorrect={true} setRating={setRat} />
    </>
  );
}
