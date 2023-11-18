"use client";

import RadioOption from "./RadioOption";

const RadioGroup = ({
  options,
  selectedIndex,
  setSelectedIndex,
  currentIndex,
  setCurrentIndex,
}) => {
  return (
    <div className="flex flex-col items-center gap-y-6">
      {options.map((option, index) => (
        <RadioOption
          key={index}
          index={index}
          option={option}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
