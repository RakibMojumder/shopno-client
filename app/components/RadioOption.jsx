"use client";

import Image from "next/image";

const RadioOption = ({ option, index, selectedIndex, setSelectedIndex }) => {
  return (
    <div
      onClick={() => setSelectedIndex(index)}
      className="flex items-center justify-center cursor-pointer border border-primary rounded py-1 px-5 w-full bg-white"
    >
      <div className="h-5 w-5 p-[3px] border-2 border-primary rounded-full">
        <div
          className={`h-full w-full rounded-full duration-700 ${
            index === selectedIndex ? "bg-primary" : "bg-white"
          }`}
        ></div>
      </div>
      <Image
        alt="card image"
        src={option.image}
        height={100}
        width={200}
        priority
        className="h-8 flex-1 object-contain"
      />
      {/* <p className="text-neutral-500">{option.option}</p> */}
    </div>
  );
};

export default RadioOption;
