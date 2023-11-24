import Card from "./Card";

const CardsList = () => {
  return (
    <div className="max-h-[664px] max-w-[300px] relative">
      <div className="flex flex-col gap-2 max-h-[606px] overflow-y-scroll no-scrollbar">
        <Card post={"Новобранец"} salary={50} description={"от 10 lvl"} />
        <Card post={"Новобранец"} salary={50} description={"от 10 lvl"} />
        <Card post={"Новобранец"} salary={50} description={"от 10 lvl"} />
        <Card post={"Новобранец"} salary={50} description={"от 10 lvl"} />
        <Card post={"Новобранец"} salary={50} description={"от 10 lvl"} />
        <Card post={"Новобранец"} salary={50} description={"от 10 lvl"} />
        <Card post={"Новобранец"} salary={50} description={"от 10 lvl"} />
        <Card post={"Новобранец"} salary={50} description={"от 10 lvl"} />
        <Card post={"Новобранец"} salary={50} description={"от 10 lvl"} />
        <Card post={"Новобранец"} salary={50} description={"от 10 lvl"} />
      </div>
      <div className="absolute bottom-14 w-full h-20 bg-gradient-to-b from-black1/10 to-black1"></div>
      <button className="violet-button">Создать новую должность</button>
    </div>
  );
};

export default CardsList;
