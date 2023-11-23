"use client";

import { useState } from "react";
import Card from "./Card";

const TabsContainer = () => {
  const [tabId, setTabId] = useState(1);

  return (
    <section className="bg-black1 min-h-[840px] max-w-5xl w-full border-2 border-black2 rounded-lg px-6 pt-6 pb-5">
      <nav className="flex items-center w-full">
        <div
          id="0"
          onClick={() => setTabId(0)}
          className={`${
            tabId === 0
              ? "rounded-t-lg z-10 bg-black1 text-violet shadow-inner shadow-[#6764f129] border-black2 border-b-black1"
              : ""
          } transition-all duration-100 max-w-[26%] w-full text-center border-2 border-black2 rounded-t-lg p-3 text-grey1 text-sm font-medium cursor-pointer`}
        >
          Иерархия
        </div>
        <div
          id="1"
          onClick={() => setTabId(1)}
          className={`${
            tabId === 1
              ? "rounded-t-lg z-10 bg-black1 text-violet shadow-inner shadow-[#6764f129] border-black2 border-b-black1"
              : "border-l-0 rounded-tr-lg"
          } transition-all duration-100 max-w-[26%] w-full -ml-3 text-center border-2 border-black2 p-3 text-grey1 text-sm font-medium cursor-pointer`}
        >
          Должности
        </div>
        <div
          id="2"
          onClick={() => setTabId(2)}
          className={`${
            tabId === 2
              ? "rounded-t-lg z-10 bg-black1 text-violet shadow-inner shadow-[#6764f129] border-black2 border-b-black1"
              : "border-l-0 rounded-tr-lg"
          } transition-all duration-100 max-w-[26%] w-full -ml-3 text-center border-2 border-black2 p-3 text-grey1 text-sm font-medium cursor-pointer`}
        >
          Список персонала
        </div>
        <div
          id="3"
          onClick={() => setTabId(3)}
          className={`${
            tabId === 3
              ? "rounded-t-lg z-10 bg-black1 text-violet shadow-inner shadow-[#6764f129] border-black2 border-b-black1"
              : "border-l-0 rounded-tr-lg"
          } transition-all duration-100 max-w-[26%] w-full -ml-3 text-center border-2 border-black2 p-3 text-grey1 text-sm font-medium cursor-pointer`}
        >
          Наборы экипировки
        </div>
      </nav>
      {tabId === 0 && <div></div>}
      {tabId === 1 && 
        <div className="border-2 border-t-0 border-black2 h-full px-10 pb-10 pt-6">
            <Card post={'Новобранец'} salary={50} description={'от 10 lvl'}/>
        </div>
      }
      {tabId === 2 && <div></div>}
      {tabId === 3 && <div></div>}
    </section>
  );
};

export default TabsContainer;
