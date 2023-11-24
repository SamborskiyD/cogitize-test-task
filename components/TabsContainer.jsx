"use client";

import { useState } from "react";
import CardsList from "./CardsList";
import Form from "./Form";

const TabsContainer = () => {
  const [tabId, setTabId] = useState(1);
  const [posts, setPosts] = useState([
    {id: 0, post: 'Новобранец', salary: 50, description: "от 10 lvl"},
    {id: 1, post: 'Новобранец', salary: 50, description: "от 11 lvl"},
    {id: 2, post: 'Новобранец', salary: 50, description: "от 12 lvl"},
    {id: 3, post: 'Новобранец', salary: 50, description: "от 13 lvl"},
    {id: 4, post: 'Новобранец', salary: 50, description: "от 14 lvl"},
    {id: 5, post: 'Новобранец', salary: 50, description: "от 15 lvl"},
    {id: 6, post: 'Новобранец', salary: 50, description: "от 16 lvl"},
    {id: 7, post: 'Новобранец', salary: 50, description: "от 17 lvl"},
    {id: 8, post: 'Новобранец', salary: 50, description: "от 18 lvl"},
    {id: 9, post: 'Новобранец', salary: 50, description: "от 19 lvl"},
    {id: 10, post: 'Новобранец', salary: 50, description: "от 20 lvl"},
  ])
  

  return (
    <section className="bg-black1 min-h-[840px] max-h-[840px] max-w-5xl w-full border-2 border-borderGrey rounded-lg px-6 pt-6 pb-5">
      <nav className="flex items-center w-full">
        <div
          id="0"
          onClick={() => setTabId(0)}
          className={`${
            tabId === 0
              ? " z-10 bg-black1 text-violet shadow-inner shadow-[#6764f129] border-borderGrey border-b-black1"
              : ""
          } transition-all duration-100 max-w-[26%] w-full text-center rounded-t-lg border-2 border-borderGrey  p-3 text-grey1 text-sm font-medium cursor-pointer`}
        >
          Иерархия
        </div>
        <div
          id="1"
          onClick={() => setTabId(1)}
          className={`${
            tabId === 1
              ? "z-10 bg-black1 text-violet shadow-inner shadow-[#6764f129] border-borderGrey border-b-black1"
              : ""
          } transition-all duration-100 max-w-[26%] w-full text-center rounded-t-lg border-2 border-borderGrey p-3 text-grey1 text-sm font-medium cursor-pointer`}
        >
          Должности
        </div>
        <div
          id="2"
          onClick={() => setTabId(2)}
          className={`${
            tabId === 2
              ? "z-10 bg-black1 text-violet shadow-inner shadow-[#6764f129] border-borderGrey border-b-black1"
              : ""
          } transition-all duration-100 max-w-[25%] w-full text-center rounded-t-lg border-2 border-borderGrey p-3 text-grey1 text-sm font-medium cursor-pointer`}
        >
          Список персонала
        </div>
        <div
          id="3"
          onClick={() => setTabId(3)}
          className={`${
            tabId === 3
              ? "z-10 bg-black1 text-violet shadow-inner shadow-[#6764f129] border-borderGrey border-b-black1"
              : ""
          } transition-all duration-100 max-w-[25%] w-full text-center rounded-t-lg border-2 border-borderGrey p-3 text-grey1 text-sm font-medium cursor-pointer`}
        >
          Наборы экипировки
        </div>
      </nav>
      {tabId === 0 && <div></div>}
      {tabId === 1 && 
        <div className="border-2 border-t-0 border-borderGrey px-10 pb-10 pt-6 flex gap-4 justify-between">
            <CardsList posts={posts} changePosts={setPosts} />
            <Form />
        </div>
      }
      {tabId === 2 && <div></div>}
      {tabId === 3 && <div></div>}
    </section>
  );
};

export default TabsContainer;
