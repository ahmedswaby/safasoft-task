import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "~/Components/TextField";

import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Select } from "~/Components/Select";
import { CompanyFormData } from '~/Pages/signUp'

const TellUsMoreForm = ({ nextStep , setData , formData }: {nextStep: Function; setData: Function; formData: CompanyFormData}) => {

    const validationSchema = yup.object().shape({
        user_full_name: yup
            .string()
            .required("Please Enter Your Name"),
            user_phone: yup
            .number()
            .typeError("Please Enter valid Phone Number")
            .required("Please Enter Your Phone Number"),
        user_email: yup
            .string()
            .nullable()
            .matches(
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                `PLease Enter Valid email`
            )
            .required(`Please Enter Email this is required field`),
        user_password: yup
            .string()
            .required(`Please enter your password`)
            .matches(/^(?!.*(password|Password)).*$/, {
                message: `Please Enter valid Password`,
                excludeEmptyString: true,
            })
            .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).*/, {
                message: `Please Enter valid Password`,
                excludeEmptyString: true,
            })
            .matches(/^(?=.[^\u0621-\u064A]{7,15}$)^(?!.*(.)\1{3}).*/, {
                message: `Please Enter valid Password`,
                excludeEmptyString: true,
            }),
        user_password_confirmation: yup
            .string()
            .required(
                `Please Enter Your Password again`
            )
            .oneOf([yup.ref("user_password"), null], 'Password not the same'),
    });



    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<{}>({ resolver: yupResolver(validationSchema),   mode: 'onChange' });

    useEffect(() => {
        reset(formData);
    }, [formData])

    const submitHandler = async data => {
        setData({...formData, ...data})
        nextStep()
        try {

        } catch (e) {
        }
    };

    return (
        <div className="mt-20 w-full">
            <h2 className="text-3xl text-center text-gray-900">Tell Us More About You.</h2>
            <form action="#" method="POST" onSubmit={handleSubmit(submitHandler)}>
                <div className="bg-white p-8 mt-8 rounded-md">
                    <TextField
                        required
                        title={'Full Name'}
                        placeholder={'Enter your Full Name'}
                        name="user_full_name"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        placeholder={'Enter Your business email'}
                        required
                        title={'Business Email'}
                        name="user_email"
                        register={register}
                        errors={errors}
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                        <Select
                            register={register}
                            name="country"
                            options={Array(12)
                                .fill(null)
                                .map((_, ind) => ({ Id: ind, Name: ind }))}
                            errors={errors}
                            title={'Country'}
                            selectText={'Choose Country'}
                            required
                        />

                        <TextField
                            placeholder={'Enter Your Phone Number'}
                            required
                            title={'Phone Number'}
                            name="user_phone"
                            pattern="[0-9]*"
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <TextField
                        placeholder={'Choose Password'}
                        required
                        title={'password'}
                        name="user_password"
                        type="password"
                        autoComplete="new-password"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        placeholder={'Repeat your Password'}
                        required
                        title={'Repeat your password'}
                        name="user_password_confirmation"
                        type="password"
                        register={register}
                        errors={errors}
                    />
                </div>
                <div className="flex w-100 justify-end my-10 w-full ">
                    <button className="btn bg-blue-600 text-white p-8 lg:px-32 py-4 rounded-md m-4" type="submit">Next</button>
                </div>
            </form>

        </div >

    )
}

export default TellUsMoreForm;
