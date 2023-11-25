const Card = ({
  id,
  post,
  salary,
  description,
  onDragStart,
  onDragEnter,
  onDragEnd,
  selectedPostId,
  setSelectedPostId,
}) => {

  const handleCardClick = () => {
    setSelectedPostId(id)
  }

  return (
    <div
      draggable
      className={`${selectedPostId === id ? "border-2 border-violet" : ""} last:z-20 px-4 py-5 bg-black2 rounded-lg max-w-[296px] flex items-center gap-4 cursor-pointer hover:shadow-[4px_8px_40px_0px_rgba(0,0,0,0.4)]`}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDragOver={(e) => e.preventDefault()}
      onClick={handleCardClick}
    >
      <span className="cursor-grab">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
        >
          <circle cx="2" cy="2" r="2" fill="#F5F5F5" fillOpacity="0.08" />
          <circle cx="2" cy="10" r="2" fill="#F5F5F5" fillOpacity="0.08" />
          <circle cx="2" cy="18" r="2" fill="#F5F5F5" fillOpacity="0.08" />
          <circle cx="10" cy="2" r="2" fill="#F5F5F5" fillOpacity="0.08" />
          <circle cx="10" cy="10" r="2" fill="#F5F5F5" fillOpacity="0.08" />
          <circle cx="10" cy="18" r="2" fill="#F5F5F5" fillOpacity="0.08" />
        </svg>
      </span>

      <div className="flex justify-between w-full text-grey1 gap-2">
        <div>
          <p className="text-sm leading-normal text-white max-w-[160px] overflow-auto no-scrollbar">{post}</p>
          <p className="text-xs leading-normal max-w-[160px] overflow-auto no-scrollbar">{description}</p>
        </div>

        <span className="text-xs leading-normal">
          <span className="text-yellow font-bold">{salary}$</span> / час
        </span>
      </div>
    </div>
  );
};

export default Card;
