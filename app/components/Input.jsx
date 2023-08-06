"use client";

const Input = ({
  type,
  label,
  name,
  value,
  defaultValue,
  disabled,
  onChange,
  onClick,
  show,
  FiEye,
  FiEyeOff,
}) => {
  return (
    <div className="w-full relative">
      <input
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder=" "
        onChange={onChange}
        disabled={disabled}
        className="peer w-full text-base pl-3 p-2 rounded border border-primary focus:border-none focus:outline-primary"
      />
      <label
        className={`absolute z-[1] bg-white px-2 -translate-y-2.5 text-sm left-3 text-primary origin-[0] duration-200 peer-focus:-translate-y-2.5 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 peer-focus:text-sm peer-focus:text-primary`}
      >
        {label}
      </label>

      {FiEye &&
        (show ? (
          <FiEye
            size={20}
            onClick={onClick}
            className="absolute top-4 right-4 text-neutral-500 cursor-pointer"
          />
        ) : (
          <FiEyeOff
            size={20}
            onClick={onClick}
            className="absolute top-4 right-4 text-neutral-500 cursor-pointer"
          />
        ))}
    </div>
  );
};

export default Input;
