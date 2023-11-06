import Button from "./components/Button/Button";
import Htag from "./components/Htag/Htag";

export default function Home() {
  return (
    <>
      <Htag tag="h1">заголовок</Htag>
      <Button typeButton="primary">Узнать подробнее</Button>
    </>
  );
}
