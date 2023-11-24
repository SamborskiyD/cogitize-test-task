const Form = () => {
  return (
    
    <form
      action=""
      className="max-w-[592px] max-h-[680px] w-full p-4 bg-black2 rounded-lg"
    >
      <div className="bg-black1 rounded-lg px-4 pt-4 pb-6">
        <label htmlFor="name" className="text-xs font-semibold text-grey1">
          Название
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full bg-black1 outline-none border-2 border-borderGrey py-3.5 px-4 rounded-lg text-sm font-semibold text-white mt-1"
        />
      </div>

      <div className="bg-black1 mt-4 rounded-lg min-h-[452px]">
        <h3 className="px-4 py-2.5 -ml-1 rounded-t-lg bg-black1 shadow-[0_4px_16px_0px_rgba(0,0,0,0.24)] text-sm text-grey1">
          Обязаности
        </h3>

        <div className="py-3 px-4 grid grid-cols-2">
          <div>
            <h4 className="text-xs text-grey1 mb-1">Торговля</h4>
            <div>
              <div className="mb-2.5 flex items-center">
                <input
                  type="checkbox"
                  name="t1"
                  id="t1"
                  className="checkbox"
                />
                <label htmlFor="t1" className="text-xs text-white ml-2">
                  Продавать продукт
                </label>
              </div>
              <div className="mb-2.5 flex items-center">
                <input type="checkbox" name="t2" id="t2" className="checkbox"/>
                <label htmlFor="t2" className="text-xs text-white ml-2">
                  Выставлять цены
                </label>
              </div>
              <div className="mb-2.5 flex items-center">
                <input type="checkbox" name="t3" id="t3" className="checkbox"/>
                <label htmlFor="t3" className="text-xs text-white ml-2">
                  Смотреть аналитику
                </label>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs text-grey1 mb-1">Производство</h4>
            <div className="mb-2.5 flex items-center">
              <input type="checkbox" name="" id="p1" className="checkbox"/>
              <label htmlFor="p1" className="text-xs text-white ml-2">
                Закупать сырье
              </label>
            </div>
            <div className="mb-2.5 flex items-center">
              <input type="checkbox" name="" id="p2" className="checkbox"/>
              <label htmlFor="p2" className="text-xs text-white ml-2">
                Назначать рабочих
              </label>
            </div>
          </div>

          <div>
            <h4 className="text-xs text-grey1 mb-1">Разборки</h4>
            <div className="mb-2.5 flex items-center">
              <input type="checkbox" name="" id="r1" className="checkbox"/>
              <label htmlFor="r1" className="text-xs text-white ml-2">
                Дуель
              </label>
            </div>
            <div className="mb-2.5 flex items-center">
              <input type="checkbox" name="" id="r2" className="checkbox"/>
              <label htmlFor="r2" className="text-xs text-white ml-2">
                Выставлять претензии
              </label>
            </div>
          </div>

          <div>
            <h4 className="text-xs text-grey1 mb-1">Управление</h4>
            <div className="mb-2.5 flex items-center">
              <input type="checkbox" name="" id="u1" className="checkbox"/>
              <label htmlFor="u1" className="text-xs text-white ml-2">
                Назначать должности
              </label>
            </div>
            <div className="mb-2.5 flex items-center">
              <input type="checkbox" name="" id="u2" className="checkbox"/>
              <label htmlFor="u2" className="text-xs text-white ml-2">
                Выгонять из банды
              </label>
            </div>
          </div>
        </div>
      </div>

      <button className="violet-button">Сохранить</button>
    </form>
  );
};

export default Form;
