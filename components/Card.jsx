const Card = ({post, salary, description}) => {
  return (
    <div className="px-4 py-5 bg-black2 rounded-lg max-w-[296px] flex items-center gap-4 cursor-pointer">

      <span className="cursor-grab">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
        >
          <circle cx="2" cy="2" r="2" fill="#F5F5F5" fill-opacity="0.08" />
          <circle cx="2" cy="10" r="2" fill="#F5F5F5" fill-opacity="0.08" />
          <circle cx="2" cy="18" r="2" fill="#F5F5F5" fill-opacity="0.08" />
          <circle cx="10" cy="2" r="2" fill="#F5F5F5" fill-opacity="0.08" />
          <circle cx="10" cy="10" r="2" fill="#F5F5F5" fill-opacity="0.08" />
          <circle cx="10" cy="18" r="2" fill="#F5F5F5" fill-opacity="0.08" />
        </svg>
      </span>

      <div className="flex justify-between w-full text-grey1">
        <div>
            <p className="text-sm leading-normal text-white">{post}</p>
            <p className="text-xs leading-normal ">{description}</p>
        </div>

        <span className="text-xs leading-normal"><span className="text-yellow font-bold">{salary}$</span> / час</span>
      </div>

    </div>
  );
};

export default Card;
