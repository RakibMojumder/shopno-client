"use client";

const TextArea = ({ label, name, value, defaultValue, disabled, onChange }) => {
  return (
    <div className="w-full relative">
      <textarea
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder=" "
        onChange={onChange}
        disabled={disabled}
        className="peer w-full text-base pl-3 p-2 rounded border border-primary focus:border-none focus:outline-primary"
      />
      <label
        className={`absolute z-[1] bg-white px-2 -translate-y-2.5 text-sm left-3 text-primary origin-[0] duration-200 peer-focus:-translate-y-2.5 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 placeholder-shown:bg-[#F6F6F6] peer-focus:text-sm peer-focus:bg-[#F6F6F6] peer-focus:text-primary`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
