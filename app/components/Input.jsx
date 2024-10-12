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
  required,
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
        required={required}
        className="peer w-full text-sm px-3 pt-4 pb-0.5 rounded border border-primary/20 focus:border-primary focus:outline-none"
      />
      <label
        className={`absolute z-[1] translate-y-0.5 text-xs left-3 text-primary origin-[0] transition-all duration-200 peer-focus:translate-y-0.5 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-primary/70 placeholder-shown:bg-white peer-focus:text-xs peer-focus:bg-white peer-focus:text-primary`}
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
