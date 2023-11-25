import { document } from "postcss";
import Card from "./Card";
import { useRef } from "react";

const CardsList = ({ posts, changePosts, selectedPostId, setSelectedPostId}) => {

  const dragCard = useRef(0);
  const draggedOverCard = useRef(0);

  const handleDragEnd = () => {
    const postsCopy = [...posts]

    const temp = postsCopy.splice(dragCard.current, 1)[0]
    postsCopy.splice(draggedOverCard.current, 0, temp)

    dragCard.current = 0
    draggedOverCard.current = 0

    changePosts(postsCopy)
  };

  const addNewPost = () => {
    const newPost = {id: posts.length, post: '', salary: 50, description: "", t1: false, t2: false, t3: false, p1: false, p2: false, r1: false, r2: false, u1: false, u2: false}
    changePosts([...posts, newPost])
    setSelectedPostId(newPost.id)
  }

  return (
    <div className="h-[664px] max-w-[300px] w-full relative flex flex-col justify-between">
      <div className="flex flex-col gap-2 max-h-[606px] overflow-y-scroll no-scrollbar">
        {posts.map((post, index) => (
          <Card
            key={index}
            {...post}
            onDragStart={() => (dragCard.current = index)}
            onDragEnter={() => (draggedOverCard.current = index)}
            onDragEnd={handleDragEnd}
            selectedPostId={selectedPostId}
            setSelectedPostId={setSelectedPostId}
          />
        ))}
      </div>
      <div className="absolute bottom-14 w-full h-20 bg-gradient-to-b from-black1/10 to-black1"></div>
      <button className="violet-button" onClick={addNewPost}>Создать новую должность</button>
    </div>
  );
};

export default CardsList;
