/* eslint-disable no-eval */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable complexity */
import React, { InputHTMLAttributes } from "react";
import { Path } from "react-hook-form";

import { TextFieldProps } from "../index.model";

interface TextFieldProps<TFormValues> extends InputHTMLAttributes<HTMLInputElement> {
    name: Path<TFormValues> | string;
    type?: "text" | "number" | "password" | "hidden";
    title?: string;
    required?: boolean;
    errors: {
        [x: string]: any;
    };
}
type TextFieldCustomProps<T> = TextFieldProps<T> & {
    redirect?: React.ReactNode;
};

export function TextField<TFormValues>({
    register,
    name,
    title,
    required,
    errors,
    type = "text",
    redirect,
    ...rest
}: TextFieldCustomProps<TFormValues>) {
    // eslint-disable-next-line prefer-const
    let validation: { message: string } | null = null;
    try {
        validation = errors?.[name];
    } catch (e) { }
    return (
        <div>
            <div className="relative mt-6">


                {title && (
                    <label htmlFor={name} className={`${validation && 'border-[#ff6059] text-[#ff6059]'} text-gray-500 focus:border-gray-700  uppercase absolute left-6 ml-1 top-[8px] bg-white px-1 text-lg duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm `}>
                        {title}
                        {required && <span className="m-2 text-[#ff6059]">*</span>}
                    </label>
                )}
            </div>
            <input
                type={type}
                id={name}
                {...(register && register(name.replaceAll("?", "") as Path<TFormValues>))}
                className={`peer px-9 pt-9 text-gray-500 w-full h-24  rounded-md border-b placeholder:text-gray-500 block ${errors?.[name] ? "border-[#ff6059]" : "border-gray-300"} ${rest.disabled && "bg-gray-500"}`}
                {...rest}
            />
            {validation && (
               <p className="mt-3 block text-1.6 capitalize text-[#ff6059]">
                   {validation?.message} {redirect}
                </p>
            )}
        </div>
    );
}
