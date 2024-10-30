/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import React , { SelectHTMLAttributes } from "react";
import { Path } from "react-hook-form";

function getDescendantProp(obj, desc) {
    if (!Object.keys(obj).length || !desc) return;
  
    const arr = desc.indexOf("[") > -1 ? desc.replace("]", "").split("[") : desc.split(".");
  
    if (!arr.length) {
      return obj[desc];
    }
  
    while (arr.length) {
      obj = obj[arr?.shift()];
    }
    return obj;
  }


interface SelectProps<TFormValues> extends SelectHTMLAttributes<HTMLSelectElement>, IFormHooks<TFormValues> {
    isLoading?: boolean;
    name: Path<TFormValues> | string;
    options: any;
    selectText?: string;
    valueProperty?: string;
    textProperty?: string;
    required?: boolean;
    title?: string;
    getSelectedItem?: (option: any) => any;
    errors: {
      [x: string]: any;
    };
  }
  

// eslint-disable-next-line complexity
export function Select<TFormValues>({
  isLoading,
  options,
  title,
  required,
  selectText,
  register,
  name,
  valueProperty = "Id",
  textProperty = "Name",
  errors,
  getSelectedItem,
  ...rest
}: SelectProps<TFormValues>) {
  const attr = {
    id: name,
    ...(register && register(name.replaceAll("?", "") as Path<TFormValues>)),
    ...rest,
  };

  // eslint-disable-next-line prefer-const
  let validation: { message: string } | null = null;
  try {
    validation = getDescendantProp(errors, name);
  } catch (e) {
    console.log(e);
  }
  return (
    <div>
    <div className="mt-6 relative">
      {title && (
        <label htmlFor={name} className={`${validation && 'border-[#ff6059] text-[#ff6059]'} text-gray-500 focus:border-gray-700  uppercase absolute left-6 ml-1 top-[8px] bg-white px-1 text-lg duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm z-10`}>
          {title}
          {required && <span className="mr-4 text-red-700">*</span>}
        </label>
      )}
    </div>
      <div className="relative">
        {isLoading && (
          <svg
            className="absolute top-10 left-16 -ml-1 mr-3 h-5 w-5 animate-spin text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <select
          {...attr}
          onChange={e => {
            if (attr?.onChange) attr?.onChange(e);
            getSelectedItem && getSelectedItem(options.filter(option => option.Id === +e.target.value)[0]);
          }}
          className={`block h-24 border-gray-300 pt-9 px-9 text-gray-500  w-full ${errors?.[name] && "border-[#ff6059]"} ${attr?.className}`}>
          {selectText && <option value="">{selectText}</option>}
          {options &&
            options?.map(option => (
              <option id={option[valueProperty]} key={option[valueProperty]} value={option[valueProperty]}>
                {option[textProperty]}
              </option>
            ))}
        </select>
      </div>
      {validation && <p className="mt-3 block text-1.4 text-[#ff6059]">{validation?.message}</p>}
    </div>
  );
}
