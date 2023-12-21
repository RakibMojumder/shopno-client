"use client";

const TextArea = ({
  label,
  name,
  value,
  defaultValue,
  disabled,
  onChange,
  required,
}) => {
  return (
    <div className="w-full relative">
      <textarea
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder=" "
        onChange={onChange}
        disabled={disabled}
        required={required}
        rows={5}
        className="peer w-full text-sm px-3 pt-4 pb-0.5 rounded border border-primary/30 focus:border-none focus:outline-secondary"
      />
      <label
        className={`absolute z-[1] translate-y-0.5 text-xs left-3 text-primary origin-[0] transition-all duration-200 peer-focus:translate-y-0.5 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-800 placeholder-shown:bg-white peer-focus:text-xs peer-focus:bg-white peer-focus:text-primary`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
