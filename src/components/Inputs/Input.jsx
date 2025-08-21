import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({ value, onChange, label, type, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="input-box flex items-center border border-gray-300 rounded px-3 py-2">
        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          value={value}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          onChange={(e) => onChange(e)}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                onClick={toggleShowPassword}
                className="text-primary cursor-pointer"
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                onClick={toggleShowPassword}
                className="text-slate-400 cursor-pointer"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
