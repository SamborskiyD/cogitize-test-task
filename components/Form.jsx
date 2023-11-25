import { useState, useEffect } from "react";

const Form = ({ posts, changePosts, selectedPostId }) => {
  const [postData, setPostData] = useState(posts[0]);

  useEffect(() => {
    setPostData(posts.find((post) => post.id === selectedPostId));
  }, [selectedPostId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postsCopy = posts.map((post) => {
      if (post.id === selectedPostId) {
        return { ...post, ...postData };
      } else {
        return post;
      }
    });
    changePosts(postsCopy);
  };

  const handleChange = (event) => {
    switch (event.target.type) {
      case "text":
        setPostData({ ...postData, [event.target.name]: event.target.value });
        break;

      case "checkbox":
        setPostData({ ...postData, [event.target.name]: event.target.checked });
    }
  };

  return (
    <form className="max-w-[592px] max-h-[680px] w-full p-4 bg-black2 rounded-lg">
      <div className="bg-black1 rounded-lg px-4 pt-4 pb-6">
        <label htmlFor="post" className="text-xs font-semibold text-grey1">
          Название
        </label>
        <input
          type="text"
          name="post"
          id="post"
          value={postData.post}
          onChange={handleChange}
          className="w-full bg-black1 outline-none border-2 border-borderGrey py-3.5 px-4 rounded-lg text-sm font-semibold text-white mt-1"
        />
      </div>

      <div className="bg-black1 mt-4 rounded-lg min-h-[452px]">
        <h3 className="px-4 py-2.5 -ml-1 rounded-t-lg bg-black1 shadow-[0_4px_16px_0px_rgba(0,0,0,0.24)] text-sm text-grey1">
          Обязаности
        </h3>

        <div className="py-3 px-4 grid grid-cols-2">

          <div>
            <div>
              <h4 className="text-xs text-grey1 mb-1">Торговля</h4>
              <div>
                <div className="mb-2.5 flex items-center">
                  <input
                    type="checkbox"
                    name="t1"
                    id="t1"
                    checked={postData.t1}
                    onChange={handleChange}
                    className="checkbox"
                  />
                  <label htmlFor="t1" className="text-xs text-white ml-2">
                    Продавать продукт
                  </label>
                </div>
                <div className="mb-2.5 flex items-center">
                  <input
                    type="checkbox"
                    name="t2"
                    id="t2"
                    checked={postData.t2}
                    onChange={handleChange}
                    className="checkbox"
                  />
                  <label htmlFor="t2" className="text-xs text-white ml-2">
                    Выставлять цены
                  </label>
                </div>
                <div className="mb-3 flex items-center">
                  <input
                    type="checkbox"
                    name="t3"
                    id="t3"
                    checked={postData.t3}
                    onChange={handleChange}
                    className="checkbox"
                  />
                  <label htmlFor="t3" className="text-xs text-white ml-2">
                    Смотреть аналитику
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs text-grey1 mb-1">Разборки</h4>
              <div className="mb-2.5 flex items-center">
                <input
                  type="checkbox"
                  name="r1"
                  id="r1"
                  checked={postData.r1}
                  onChange={handleChange}
                  className="checkbox"
                />
                <label htmlFor="r1" className="text-xs text-white ml-2">
                  Дуель
                </label>
              </div>
              <div className="mb-3 flex items-center">
                <input
                  type="checkbox"
                  name="r2"
                  id="r2"
                  checked={postData.r2}
                  onChange={handleChange}
                  className="checkbox"
                />
                <label htmlFor="r2" className="text-xs text-white ml-2">
                  Выставлять претензии
                </label>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h4 className="text-xs text-grey1 mb-1">Производство</h4>
              <div className="mb-2.5 flex items-center">
                <input
                  type="checkbox"
                  name="p1"
                  id="p1"
                  checked={postData.p1}
                  onChange={handleChange}
                  className="checkbox"
                />
                <label htmlFor="p1" className="text-xs text-white ml-2">
                  Закупать сырье
                </label>
              </div>
              <div className="mb-3 flex items-center">
                <input
                  type="checkbox"
                  name="p2"
                  id="p2"
                  checked={postData.p2}
                  onChange={handleChange}
                  className="checkbox"
                />
                <label htmlFor="p2" className="text-xs text-white ml-2">
                  Назначать рабочих
                </label>
              </div>
            </div>

            <div>
              <h4 className="text-xs text-grey1 mb-1">Управление</h4>
              <div className="mb-2.5 flex items-center">
                <input
                  type="checkbox"
                  name="u1"
                  id="u1"
                  checked={postData.u1}
                  onChange={handleChange}
                  className="checkbox"
                />
                <label htmlFor="u1" className="text-xs text-white ml-2">
                  Назначать должности
                </label>
              </div>
              <div className="mb-3 flex items-center">
                <input
                  type="checkbox"
                  name="u2"
                  id="u2"
                  checked={postData.u2}
                  onChange={handleChange}
                  className="checkbox"
                />
                <label htmlFor="u2" className="text-xs text-white ml-2">
                  Выгонять из банды
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>

      <button className="violet-button" onClick={handleSubmit}>
        Сохранить
      </button>
    </form>
  );
};

export default Form;
